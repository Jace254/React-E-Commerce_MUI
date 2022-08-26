import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProductCard(props) {
    const productName = props.productName;
    const productPrice = props.productPrice;
    const imageUrl = props.imageUrl;
    
    return (
        <Card sx={{ maxWidth: 275, display: 'flex', alignItems: 'center',justifyContent: 'spaced-evenly'}}>
        <CardContent>
            <Box
            sx={{width: '250px', alignItems: 'center'}}>
                <img style={{width: 'inherit', borderRadius: "3px"}}src={imageUrl} alt="product" />
            </Box>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {productName}
            </Typography>
            <Typography 
            sx={{
                fontSize: '20px',
                fontStyle: 'bold',
            }}
            variant="body2">
            {productPrice}
            </Typography>
            <Button variant={"contained"} size={'small'}>ADD TO CART</Button>
        </CardContent>
        </Card>
    );
}