import { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewAgent = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [propertiesNumber, setPropertiesNumber] = useState<number>(0);
    const [location, setLocation] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [facebook, setFacebook] = useState<string>("");
    const [instagram, setInstagram] = useState<string>("");
    const [twitter, setTwitter] = useState<string>("");

    const navigate = useNavigate();

    // create new agent
    const createNewAgent = (event: any) => {
        event.preventDefault();

        const agentData: any = {
            address: {
                location,
                street,
                zipCode,
                city,
                country
            },
            socialMediaUrl: {
                facebook,
                instagram,
                twitter
            },
            images: "https://techzaa.getappui.com/lahomes/admin/assets/images/users/avatar-2.jpg",
            name,
            email,
            mobileNumber,
            propertiesNumber
        }

        console.log(agentData);

        axios.post("https://sampatti-search-api.vercel.app/api/agents", agentData)
            .then((agent) => {
                alert(agent.data.message);
                navigate("/agents");
            }).catch(error => console.log(error.message));
    }

    return (
        <>
            <PageHeader pageTitle="Add New Agent" />

            <div className="max-w-4xl mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-6">Add New Agent</h1>
                <form className="space-y-4" onSubmit={createNewAgent}>
                    <div>
                        <label htmlFor="agentName" className="block text-sm font-medium text-gray-700">Agent Name</label>
                        <input id="agentName" value={name} onInput={(event: any) => setName(event.target.value)} name="agentName" placeholder="Enter agent name" required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input id="email" value={email} onInput={(event: any) => setEmail(event.target.value)} name="email" placeholder="Enter email" type="email" required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input id="mobileNumber" value={mobileNumber} onInput={(event: any) => setMobileNumber(event.target.value)} name="mobileNumber" placeholder="Enter mobile number" required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <div>
                        <label htmlFor="propertiesNumber" className="block text-sm font-medium text-gray-700">Number of Properties</label>
                        <input id="propertiesNumber" value={propertiesNumber} onInput={(event: any) => setPropertiesNumber(event.target.value)} name="propertiesNumber" placeholder="Enter number of properties" type="number" required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>

                    <fieldset className="border border-gray-300 rounded-md p-4">
                        <legend className="text-sm font-medium text-gray-700">Address</legend>
                        <div>
                            <label htmlFor="addressLocation" className="block text-sm font-medium text-gray-700">Location</label>
                            <input id="addressLocation" value={location} onInput={(event: any) => setLocation(event.target.value)} name="address.location" placeholder="Enter location" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="addressStreet" className="block text-sm font-medium text-gray-700">Street</label>
                            <input id="addressStreet" value={street} onInput={(event: any) => setStreet(event.target.value)} name="address.street" placeholder="Enter street" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="addressZipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                            <input id="addressZipCode" value={zipCode} onInput={(event: any) => setZipCode(event.target.value)} name="address.zipCode" placeholder="Enter zip code" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="addressCity" className="block text-sm font-medium text-gray-700">City</label>
                            <input id="addressCity" value={city} onInput={(event: any) => setCity(event.target.value)} name="address.city" placeholder="Enter city" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="addressCountry" className="block text-sm font-medium text-gray-700">Country</label>
                            <input id="addressCountry" value={country} onInput={(event: any) => setCountry(event.target.value)} name="address.country" placeholder="Enter country" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                    </fieldset>

                    <fieldset className="border border-gray-300 rounded-md p-4">
                        <legend className="text-sm font-medium text-gray-700">Social Media Links</legend>
                        <div>
                            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook URL</label>
                            <input id="facebook" value={facebook} onInput={(event: any) => setFacebook(event.target.value)} name="socialMediaUrl.facebook" placeholder="Enter Facebook URL" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram URL</label>
                            <input id="instagram" value={instagram} onInput={(event: any) => setInstagram(event.target.value)} name="socialMediaUrl.instagram" placeholder="Enter Instagram URL" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter URL</label>
                            <input id="twitter" value={twitter} onInput={(event: any) => setTwitter(event.target.value)} name="socialMediaUrl.twitter" placeholder="Enter Twitter URL" required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                    </fieldset>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Add Agent
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddNewAgent;
