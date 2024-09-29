import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

const Header = ({ isOpen, toggleSidebar }:any) => {
    return (
        <AppBar position="static" className="!bg-white border-b border-solid border-[#eaedf1] custom-shadow">
            <Toolbar className="!px-4">
                <IconButton className='text-black' edge="start" onClick={toggleSidebar}>
                    {isOpen ? <MenuIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" className="flex-grow text-black">Admin Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
