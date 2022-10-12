import { Box } from '@mui/material';
import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

export default function Home() {
    return(
        <div>
            <Box sx={{}}>
                <Box sx={{flexGrow: 1}}/>
                <ProductCard productName='kiatu' productPrice='300' itemCount= '2' imageUrl='https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'/>
            </Box>
        </div>
    )
}