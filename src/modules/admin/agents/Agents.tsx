import { TextField } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Agents = () => {
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
                    <button className="flex items-center text-white bg-[#53ae77] py-2 px-4 rounded-md text-sm hover:bg-[#459f66] transition duration-200">
                        <AddOutlinedIcon className="mr-1" />
                        New Agent
                    </button>
                </div>
            </div>

            <div className="py-3 px-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-white text-[#5d7186] border-b border-solid border-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Agent Photo & Name</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Header 2</th>
                                <th className="py-3 px-4 text-left text-sm font-semibold">Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 px-4 border-b">Row 1, Cell 1</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 2</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 3</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b">Row 1, Cell 1</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 2</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 3</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b">Row 1, Cell 1</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 2</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 3</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b">Row 1, Cell 1</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 2</td>
                                <td className="py-3 px-4 border-b">Row 1, Cell 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Agents;