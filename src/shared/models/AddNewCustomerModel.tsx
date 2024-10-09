import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; // Import close icon
import Button from '@mui/material/Button';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "25px",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    maxHeight: "80vh",
};

const AddNewCustomerModel = ({ open, onClose }: any) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {/* Header Part */}
                <Box display="flex" bgcolor="#53ae77" justifyContent="space-between" alignItems="center" p={2}>
                    <Typography id="modal-modal-title" color="#fff" variant="h6" component="h2">
                        Add New Customer
                    </Typography>
                    <IconButton className="!text-white" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Body Part */}
                <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto' }}>
                    <Typography id="modal-modal-description">
                        {/* Add your form fields here */}
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>

                {/* Footer Part */}
                <Box display="flex" justifyContent="flex-end" p={2}>
                    <Button variant="outlined" color="primary" onClick={onClose} sx={{ mr: 2 }}>
                        Close
                    </Button>
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddNewCustomerModel;
