import { List, ListItem, ListItemText, Divider } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import PeopleIcon from '@mui/icons-material/People';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }: any) => {

    return (
        <>
            <div className={`bg-[#1C252E] text-[#eef2f7] h-full transition-all duration-300 fixed top-0 left-0 z-30 ${isOpen ? 'w-60' : 'w-0 overflow-hidden'}`}>
                <div className="flex items-center justify-center h-16">
                    <img src={logo} alt="Logo" className={`h-12 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <List>
                    <Link to="/dashboard">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <DashboardOutlinedIcon />
                            <ListItemText primary={isOpen ? "Dashboard" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="/property">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <HomeWorkOutlinedIcon />
                            <ListItemText primary={isOpen ? "Property" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <PeopleOutlineOutlinedIcon />
                            <ListItemText primary={isOpen ? "Agents" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <ContactPageOutlinedIcon />
                            <ListItemText primary={isOpen ? "Customers" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <MapsHomeWorkOutlinedIcon />
                            <ListItemText primary={isOpen ? "Orders" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <PeopleIcon />
                            <ListItemText primary={isOpen ? "Reviews" : ""} />
                        </ListItem>
                    </Link>
                    <Link to="">
                        <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                            <ReviewsOutlinedIcon />
                            <ListItemText primary={isOpen ? "Blog" : ""} />
                        </ListItem>
                    </Link>
                    <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                        <SettingsIcon />
                        <ListItemText primary={isOpen ? "Settings" : ""} />
                    </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />

                <div className="flex items-center justify-center mt-auto mb-4">
                    <button
                        className={`flex items-center gap-x-2 bg-red-600 text-white py-2 px-4 rounded transition duration-200 hover:bg-red-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <PeopleIcon />
                        <span>{isOpen ? "Logout" : ""}</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;