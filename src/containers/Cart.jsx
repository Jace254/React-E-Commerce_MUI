import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Divider, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/Checkout');
    }

    return (
        <div>
            <Drawer
            sx={{
            width: props.drawerWidth,
            flexShrink: 0,
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
                <CartFooter>
                    <Button
                    sx={{mt: 2,
                        bgcolor: "#ff5f58",
                        width: 200,
                        height: 50,
                    }} variant={"contained"}
                    onClick={handleCheckout}
                    >Checkout</Button>
                </CartFooter>
            </Drawer>
        </div>
    )
}

export default Cart