import React from 'react';
import { IconButton, Button} from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailOutlined';
import {styled} from "@mui/material/styles";
import Login from '../../components/Login';
import Register from '../../components/Register';

const popupStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: "#ffe8e5",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const TopnavContainer = styled("nav")(({theme}) => ({
    display: 'flex',
    backgroundColor: '#0c446f',
    padding: '0 12px 0 12px',
    alignItems: "center"
}))

export default function Topnav(){

    return (
        <TopnavContainer>
            <div style={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                color: "white",
            }}>
                <IconButton
                onClick={() => window.location = 'mailto:support@herufi.co.ke'}>
                    <EmailRoundedIcon sx={{ color: 'white' }}/>
                </IconButton>
                <Button
                size={"small"}
                sx={{color: "white"}}
                variant={"text"} 
                onClick={() => window.location = 'mailto:support@herufi.co.ke'}>
                    Contact Support
                </Button>
            </div>
            <div style={{ display: "flex" }}>
                <Login popupStyle={popupStyle}/>
                <Register popupStyle={popupStyle}/>
            </div>
        </TopnavContainer>
    )
}