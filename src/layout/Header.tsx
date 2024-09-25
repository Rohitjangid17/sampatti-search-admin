import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ isOpen, toggleSidebar }:any) => {
    return (
        <AppBar position="static" className="bg-blue-600">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" className="flex-grow">Admin Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
