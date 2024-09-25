import { List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ isOpen }: any) => {
    return (
        <div className={`bg-gray-800 text-white h-full transition-all duration-300 fixed top-0 left-0 z-30 ${isOpen ? 'w-60' : 'w-0 overflow-hidden'}`}>
            <List>
                <ListItem>
                    <DashboardIcon />
                    <ListItemText primary={isOpen ? "Dashboard" : ""} />
                </ListItem>
                <ListItem>
                    <PeopleIcon />
                    <ListItemText primary={isOpen ? "Users" : ""} />
                </ListItem>
                <ListItem>
                    <SettingsIcon />
                    <ListItemText primary={isOpen ? "Settings" : ""} />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
