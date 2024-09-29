import axios from "axios";
import { useEffect, useState } from "react";

const Settings = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        password: "",
        profilePicture: "",
        address: "",
        dateOfBirth: "",
    });

    const getUserById = (userId: string) => {
        console.log(userId);

        axios.get("http://localhost:5000/api/users/" + userId)
            .then(res => {
                console.log(res.data);
                setUserData({
                    name: res.data.name || "",
                    email: res.data.email || "",
                    mobileNumber: res.data.mobileNumber || "",
                    password: res.data.password || "",
                    profilePicture: res.data.profilePicture || "",
                    address: res.data.address || "",
                    dateOfBirth: res.data.dateOfBirth || "",
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser && parsedUser._id) {
                getUserById(parsedUser._id);
            }
        }
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">User Profile</h2>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Enter your name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Enter your mobile number"
                        value={userData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
                    <input
                        type="url"
                        id="profilePicture"
                        name="profilePicture"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Enter profile picture URL"
                        value={userData.profilePicture}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        placeholder="Enter your address"
                        value={userData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                        value={userData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
}

export default Settings;
