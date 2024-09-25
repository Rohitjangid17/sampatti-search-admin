import { List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }: any) => {
    return (
        <div className={`bg-[#1C252E] text-[#eef2f7] h-full transition-all duration-300 fixed top-0 left-0 z-30 ${isOpen ? 'w-60' : 'w-0 overflow-hidden'}`}>
            <div className="flex items-center justify-center h-16">
                <img src={logo} alt="Logo" className={`h-12 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <List>
                <Link to="/">
                    <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                        <DashboardIcon />
                        <ListItemText primary={isOpen ? "Dashboard" : ""} />
                    </ListItem>
                </Link>
                <Link to="">
                    <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                        <PeopleIcon />
                        <ListItemText primary={isOpen ? "Users" : ""} />
                    </ListItem>
                </Link>
                <ListItem className='flex items-center gap-x-2 cursor-pointer'>
                    <SettingsIcon />
                    <ListItemText primary={isOpen ? "Settings" : ""} />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
