import React from 'react'
import {
    Typography,
    Button,
    Modal,
    TextField,
} from "@mui/material";
import { Box } from '@mui/system';


export default function Login(props) {

    const popupStyle = props.popupStyle;
    //Open Login
    const [openL, setOpenL] = React.useState(false);
    const handleOpenL = () => setOpenL(true);
    const handleCloseL = () => setOpenL(false);
    return (
        <div>
            {/* Login */}
            <Button size={"small"} sx={{
                color: "white"
            }} variant={"text"} onClick={handleOpenL}>
                Login
            </Button>
            <Modal
            open={openL}
            onClose={handleCloseL}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={popupStyle}>
                    <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 , fontSize: 20}}>
                        LOGIN
                    </Typography>

                    <TextField 
                    id="outlined-basic" 
                    label="Email" variant="outlined" 
                    sx={{ mt: 2, bgcolor: "white", width: 350}}/>

                    <TextField 
                    id="outlined-basic" label="Password" 
                    variant="outlined" 
                    sx={{ mt: 2, bgcolor: "white", width: 350}}/>

                    <Button size={"medium"} sx={{
                            mt: 2,
                            bgcolor: "#ff5f58",
                            width: 350,
                            height: 50,
                    }} variant={"contained"}>Login</Button>
                </Box>
            </Modal>
        </div>
    )
}

