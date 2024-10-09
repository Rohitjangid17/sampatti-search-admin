import { TextField } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Loader from "../../../components/Loader";

const Agents = () => {
    const [agents, setAgents] = useState<any>([]);
    const [isLoader, setIsLoader] = useState<boolean>(false);

    useEffect(() => {
        getAgents();
    }, []);

    // get agents list
    const getAgents = () => {
        setIsLoader(true);
        // https://sampatti-search-api.vercel.app/api/agents?page=1&limit=2
        axios.get("https://sampatti-search-api.vercel.app/api/agents?page=1&limit=100")
            .then((agents) => {
                setAgents(agents.data.agents);
                setIsLoader(false);
                console.log(agents.data.agents);
            }).catch(error => {
                setAgents([]);
                setIsLoader(false);
                console.error(error.message);
            });
    }

    // delete agent by id
    const deleteAgentById = (agentId: string) => {
        console.log(agentId);

        axios.delete(`https://sampatti-search-api.vercel.app/api/agents?id=${agentId}`)
            .then(agent => {
                alert(agent.data.message);
                getAgents();
            })
            .catch(error => console.error(error.message));
    }

    return (
        <>
            <PageHeader pageTitle="Agents" />
            <div className="mx-4 px-4 py-3 flex items-center justify-between border border-solid border-gray-200 rounded-lg shadow-sm bg-white">
                <div className="w-56">
                    <TextField
                        name="name"
                        label="Search Agent"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            className: "rounded-lg",
                        }}
                    />
                </div>

                <div>
                    <Link to="/add-new-agent" className="flex items-center text-white bg-[#53ae77] py-2 px-4 rounded-md text-sm hover:bg-[#459f66] transition duration-200">
                        <AddOutlinedIcon className="mr-1" />
                        New Agent
                    </Link>
                </div>
            </div>

            <div className="py-3 px-4">
                <div className="overflow-x-auto calc-height">
                    <table className="w-full border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-white text-[#5d7186] border-b border-solid border-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-semibold whitespace-nowrap">Agent Photo & Name</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Address</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Email</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Contact</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Experience</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Date</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Status</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agents.map((agent: any) => (
                                <tr key={agent._id}>
                                    <td className="py-3 px-4 border-b">{agent.name}</td>
                                    <td className="py-3 px-4 border-b">{agent.address?.location}</td>
                                    <td className="py-3 px-4 border-b">{agent.email}</td>
                                    <td className="py-3 px-4 border-b">{agent.mobileNumber}</td>
                                    <td className="py-3 px-4 border-b">10+ Years</td>
                                    <td className="py-3 px-4 border-b">{new Date(agent.createdAt).toLocaleDateString()}</td>
                                    <td className="py-3 px-4 border-b">Active</td>
                                    <td className="py-3 px-4 border-b">
                                        <div className="flex gap-x-2">
                                            <button type="button" >
                                                <EditOutlinedIcon style={{ fontSize: "14px" }} />
                                            </button>
                                            <button type="button" onClick={() => deleteAgentById(agent._id)}>
                                                <DeleteOutlineOutlinedIcon style={{ fontSize: "14px" }} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </div>

            <Loader isVisible={isLoader} />
        </>
    );
};

export default Agents;