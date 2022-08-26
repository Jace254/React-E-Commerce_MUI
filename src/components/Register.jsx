import React from 'react'
import {
    Typography,
    Button,
    Modal,
    TextField,
} from "@mui/material";
import { Box } from '@mui/system';



export default function Register(props) {

    const popupStyle = props.popupStyle;
    //Open Register
    const [openR, setOpenR] = React.useState(false);
    const handleOpenR = () => setOpenR(true);
    const handleCloseR = () => setOpenR(false);

    return (
        <div>
            {/* Register */}
            <Button size={"small"} sx={{
                color: "white"
            }} variant={"text"} onClick={handleOpenR}>
                Register
            </Button>
            <Modal
            open={openR}
            onClose={handleCloseR}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={popupStyle}>
                    <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2, fontSize: 20}}>
                        REGISTER
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", width: 358}}>
                        <TextField 
                        id="outlined-basic" label="FirstName" 
                        variant="outlined" 
                        sx={{ mt: 2, mx: 0.5, bgcolor: "white"}}/>

                        <TextField 
                        id="outlined-basic" label="LastName" 
                        variant="outlined" 
                        sx={{ mt: 2, mx: 0.5, bgcolor: "white" }}/>
                    </Box>

                    <TextField 
                    id="outlined-basic" label="Email" 
                    variant="outlined" 
                    sx={{ mt: 2, bgcolor: "white", width: 350}} />

                    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", width: 358}}>

                        <TextField 
                        id="outlined-basic" label="Password" 
                        variant="outlined" 
                        sx={{ mt: 2, mx: 0.5, bgcolor: "white"}}/>

                        <TextField 
                        id="outlined-basic" label="Confirm Password" 
                        variant="outlined" 
                        sx={{ mt: 2, mx: 0.5, bgcolor: "white"}}/>

                    </Box>

                    

                    <Button size={"medium"} sx={{
                        mt: 2,
                        bgcolor: "#ff5f58",
                        width: 350,
                        height: 50,
                    }} variant={"contained"}>Register</Button>
                </Box>
            </Modal>
    </div>
    )
}

