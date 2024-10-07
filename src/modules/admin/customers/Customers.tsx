import { IconButton, TableContainer, Paper, TextField, Table, TableHead, TableRow, TableCell, TableBody, MenuItem, Menu } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Loader from "../../../components/Loader";
import axios from "axios";

const Customers = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [customers, setCustomers] = useState<any>([]);

    useEffect(() => {
        getCustomerList();
    }, []);

    // get customer list
    const getCustomerList = () => {
        setIsLoader(true);
        axios.get("https://sampatti-search-api.vercel.app/api/customers")
            .then((response) => {
                setIsLoader(false);
                console.log(response);
                setCustomers(response.data.customers);
            }).catch(error => {
                setCustomers([]);
                setIsLoader(false);
                console.error(error.message);
            });
    }


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            {/* page top header start here  */}
            <PageHeader pageTitle="Customers" />
            {/* page top header end here  */}

            {/* page sub header start here */}
            <div className="px-4 flex justify-between">
                <div>
                    <TextField
                        name="name"
                        label="Search Customer"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            className: "rounded-lg",
                        }}
                    />
                </div>

                <div className="flex items-center">
                    <IconButton>
                        <ReorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <GridViewOutlinedIcon />
                    </IconButton>

                    <Link to="/" className="ml-3 flex gap-x-2 items-center text-white bg-[#53ae77] py-2 px-4 rounded-md text-sm hover:bg-[#459f66] transition duration-200">
                        <AddOutlinedIcon />
                        <span className="hidden sm:block">New Customer</span>
                    </Link>
                </div>
            </div>
            {/* page sub header start here */}

            <div className="px-4 py-3">
                <TableContainer className="overflow-auto" component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">Agent Photo & Name</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">E-Mail</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">Mobile Number</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">View Proerties</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">Date</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">Status</TableCell>
                                <TableCell className="!text-sm !text-[#5d7186] !font-semibold whitespace-nowrap">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((customer: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center gap-x-3">
                                            <img src={customer.image} className="w-12 h-12 object-cover rounded-full" alt={customer.name} />
                                            <span className="text-base font-medium">{customer.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm">{customer.email}</TableCell>
                                    <TableCell className="text-sm">{customer.mobileNumber}</TableCell>
                                    <TableCell className="text-sm">{customer.viewProperties}</TableCell>
                                    <TableCell className="text-sm">{new Date(customer.createdAt).toLocaleDateString("en-GB")}</TableCell>
                                    <TableCell className="text-sm">
                                        <span className="bg-green-300 px-3 py-1 rounded-[4px] text-green-700 font-medium border border-solid border-green-700">{customer.status}</span>
                                    </TableCell>
                                    <TableCell className="text-sm">
                                        <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? 'long-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button', }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            slotProps={{
                                                paper: {
                                                    style: {
                                                        maxHeight: 48 * 4.5,
                                                        width: "25ch",
                                                    },
                                                },
                                            }}
                                        >
                                            <MenuItem className="flex items-center gap-x-3" selected={false} onClick={handleClose}>
                                                <RemoveRedEyeOutlinedIcon />
                                                <span>Preview Customer</span>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-x-3" selected={false} onClick={handleClose}>
                                                <DeleteOutlineOutlinedIcon />
                                                <span>Delete Customer</span>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-x-3" selected={false} onClick={handleClose}>
                                                <EditOutlinedIcon />
                                                <span>Edit Customer</span>
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Loader isVisible={isLoader} />
        </>
    )
}

export default Customers;
