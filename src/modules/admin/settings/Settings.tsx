import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../../components/PageHeader";
import { IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import imageCompression from 'browser-image-compression';

const Settings = () => {
    const [userData, setUserData] = useState<{
        name: string;
        email: string;
        mobileNumber: string;
        profilePicture: string; // Store URL or Blob URL
        address: string;
        dateOfBirth: string;
    }>({
        name: "",
        email: "",
        mobileNumber: "",
        profilePicture: "",
        address: "",
        dateOfBirth: "",
    });

    const [userId, setUserId] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const getUserById = (userId: string) => {
        setUserId(userId);
        axios.get(`https://sampatti-search-api.vercel.app/api/users/${userId}`)
            .then(res => {
                setUserData(res.data);
                // Check if there's a profile picture URL to set the image
                if (res.data.profilePicture) {
                    setImage(res.data.profilePicture);
                }
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser && parsedUser._id) {
                getUserById(parsedUser._id);
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            try {
                const compressedFile = await imageCompression(file, options);
                const imageUrl = URL.createObjectURL(compressedFile);
                setImage(imageUrl);
                setUserData(prevData => ({
                    ...prevData,
                    profilePicture: imageUrl, // Temporarily using the Blob URL
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    const removeCollectionImage = () => {
        setImage(null);
        setUserData(prevData => ({
            ...prevData,
            profilePicture: "",
        }));
    };

    const userUpdate = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Convert Blob URL to a file object for backend if necessary
            const response = await axios.put(`https://sampatti-search-api.vercel.app/api/users/settings/${userId}`, userData);
            console.log(response);

            // Assuming the response returns the updated user data, set the image
            if (response.data.profilePicture) {
                setImage(response.data.profilePicture); // Use the stored URL from the backend
            }
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <>
            <PageHeader pageTitle="Settings" />
            <div className="flex flex-auto items-center px-4 mt-2 mb-5">
                <div className="relative w-24 h-24 overflow-hidden">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 file-upload-button z-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20 image-box-card">
                        {image ? (
                            <div className="relative">
                                <img className="image-content" src={image} alt="profile" />
                                <IconButton
                                    className="text-red-600 top-1 right-1 absolute cursor-pointer delete-mat-icon"
                                    onClick={removeCollectionImage}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <IconButton className="text-secondary cursor-pointer">
                                <CameraAltIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
            </div>

            <div className="px-4">
                <form onSubmit={userUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            value={userData.name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            value={userData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="mobileNumber"
                            label="Mobile Number"
                            variant="outlined"
                            value={userData.mobileNumber}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="address"
                            label="Address"
                            variant="outlined"
                            value={userData.address}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="dateOfBirth"
                            label="Date of Birth"
                            type="date"
                            variant="outlined"
                            value={userData.dateOfBirth.split("T")[0]} // Format for input
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Settings;
