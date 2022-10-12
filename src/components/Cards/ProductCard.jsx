import * as React from 'react';
import {Box,Card,CardContent,IconButton} from '@mui/material';
import { AddBox, IndeterminateCheckBox} from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export default function ProductCard(props) {
    const productName = props.productName;
    const productPrice = props.productPrice;
    const imageUrl = props.imageUrl;
    const itemCount = props.itemCount;
    
    return (
        <Card >
        <CardContent sx={{ maxWidth: {xs: 320, sm: 250}, 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'spaced-evenly', 
                        flexDirection: 'column'}}>
                <Box
                sx={{width: {xs: 315, sm: 245}, alignItems: 'center'}}>
                    <img style={{width: 'inherit', borderRadius: "3px"}}src={imageUrl} alt="product" />
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{display: 'flex', justifyContent:'evenly-spaced'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'evenly-spaced'}}>
                        <Typography sx={{ mb: 3 , mt: 1.5}} color="text.primary" variant="h5" >
                        {productName}
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Typography 
                        sx={{
                            fontSize: '17px',
                            fontStyle: 'bold',
                            color: '#ff5f58',
                        }}
                        variant="body2">
                        Ksh {productPrice}
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                    <Box>
                        <IconButton sx={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <AddBox sx={{color: "#0c446f;", '&:active': {color: "#082a45"}}}/>
                        </IconButton>
                        <Typography sx={{alignItems: "center"}}>{itemCount}</Typography>
                        <IconButton sx={{
                            display: "flex",
                            alignItems: "center",
                        }}> 
                            <IndeterminateCheckBox sx={{ color: "#0c446f;", '&:active': {color: "#082a45"} }}/>
                        </IconButton>
                    </Box>
                </Box>
        </CardContent>
        </Card>
    );
}