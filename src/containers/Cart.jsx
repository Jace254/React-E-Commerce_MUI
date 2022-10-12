import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Divider, Drawer, IconButton, Box, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ShoppingBagImg from '../assets/images/logos/shopping-bag.svg'


const CartHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const CartFooter = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}))

function Cart(props) {
    const [productNum, setProductNum]= useState();

    useEffect(()=> {
        setProductNum(0)
    },[])
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/Checkout');
    }

    return (
        <div>
            <Drawer
            sx={{
            width: props.drawerWidth,
            display: 'flex',
            '& .MuiDrawer-paper': {
                width: props.drawerWidth,
            },
            }}
            variant="persistent"
            anchor="right"
            open={props.open}
            >
                <CartHeader>
                <IconButton onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <div>CART</div>
                </CartHeader>
                <Divider/>

                {productNum === 0 && <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}> 
                <Box>
                    <img src={ShoppingBagImg} alt='cart'/>
                    <Typography>Cart is empty</Typography>
                </Box>
                </Box>}
                {productNum > 0 &&<CartFooter sx={{ 
                    position: "fixed",
                    bottom: 0,
                }}>
                    <Button
                    sx={{mt: 2,
                        mb: 2,
                        bgcolor: "#ff5f58",
                        width: 200,
                        height: 50,
                    }} variant={"contained"}
                    onClick={handleCheckout}
                    >Checkout</Button>
                </CartFooter>}
            </Drawer>
        </div>
    )
}

export default Cart