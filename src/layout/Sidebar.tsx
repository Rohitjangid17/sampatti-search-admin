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
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }: any) => {
    const location = useLocation();

    return (
        <div
            className={`bg-[#1C252E] text-[#eef2f7] h-full fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out 
                        ${isOpen ? 'w-60 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}
        >
            <div className="flex items-center justify-center h-16">
                <img src={logo} alt="Logo" className={`h-12 transition-opacity duration-300`} />
            </div>
            <List className='!px-2 overflow-y-auto'>
                <Link to="/dashboard">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/dashboard" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <DashboardOutlinedIcon />
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>
                <Link to="/property">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/property" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <HomeWorkOutlinedIcon />
                        <ListItemText primary="Property" />
                    </ListItem>
                </Link>
                <Link to="/agents">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/agents" || location.pathname === "/add-new-agent" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <PeopleOutlineOutlinedIcon />
                        <ListItemText primary="Agents" />
                    </ListItem>
                </Link>
                <Link to="/customers">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/customers" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <ContactPageOutlinedIcon />
                        <ListItemText primary="Customers" />
                    </ListItem>
                </Link>
                <Link to="/orders">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/orders" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <MapsHomeWorkOutlinedIcon />
                        <ListItemText primary="Orders" />
                    </ListItem>
                </Link>
                <Link to="/reviews">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/reviews" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <PeopleIcon />
                        <ListItemText primary="Reviews" />
                    </ListItem>
                </Link>
                <Link to="/blog">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/blog" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <ReviewsOutlinedIcon />
                        <ListItemText primary="Blog" />
                    </ListItem>
                </Link>
                <Link to="/settings">
                    <ListItem className={`flex items-center gap-x-2 cursor-pointer ${location.pathname === "/settings" ? "bg-[#ffffff0f] rounded-lg text-white" : ""}`}>
                        <SettingsIcon />
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Link>
            </List>

            <Divider sx={{ my: 2 }} />

            <div className="flex items-center justify-center mt-auto mb-4">
                <button
                    className={`flex items-center gap-x-2 bg-red-600 text-white py-2 px-4 rounded transition duration-200 hover:bg-red-500`}
                >
                    <PeopleIcon />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;