import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TopNavigation from './Topnav';
import Cart from '../Cart';
import Categories from '../Categories';


const cartWidth = 400;


const Topnav = styled(TopNavigation, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -cartWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${cartWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: cartWidth,
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  color: 'black',
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.8),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(8),
  width: '80%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  flexGrow: 2
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  flexGrow: 1
}));

const StyledButton = styled("button")(({theme}) => ({
  color: "inherit",
  background: "transparent",
  marginRight: theme.spacing(2),
  borderLeft: "solid gray 1px",
  padding: "12px"

}))

export default function PrimarySearchAppBar() {

  //Navigation
  const navigate = useNavigate();

  const home = () =>{
    navigate('/')
  }
 
  //Cart Drawer Handling
  const [open, setOpen] = React.useState(false);

  const handleCartOpen = () => {
    setOpen(true);
  }

  const handleCartClose = () => {
    setOpen(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Topnav open={open}/>
      <AppBar sx={{
        background: "#ff5f58",
        display: "flex",
        justifyContent: "spaced-evenly"
      }} position="static" open={open}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            color={"text-primary"}
            component="div"
            sx={{
              color: "black",
              flexGrow: 1,
              cursor: "pointer"
            }}
            onClick={home}
          >
            HERUFI
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search and hit enter…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <StyledButton>All Categories</StyledButton>
          </Search>

          <Box sx={{display: {xs: 'none', sm: 'block'}, flexGrow: 1}}/>

          <Box sx={{display: {xs: 'none', sm: 'block'}, direction: 'row',justifyContent: 'spaced-evenly'}}>
          <IconButton size="large" sx={{
              background: "#ffe8e5",
              ...(open && {display: "none"})
            }} 
            aria-label="open drawer" 
            onClick={handleCartOpen}
            >
              <PermIdentityOutlinedIcon/>
            </IconButton>

            <IconButton size="large" sx={{
              background: "#ffe8e5",
              ...(open && {display: "none"})
            }} 
            aria-label="open drawer" 
            onClick={handleCartOpen}
            >
              
              <Badge badgeContent={4} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>

            </IconButton>
          </Box>
        </Toolbar>
        <Toolbar>
          <div style={{flexGrow: 1}}><Categories/></div>
        </Toolbar>
      </AppBar>
      <Cart open={open} drawerWidth={cartWidth} handleClose={handleCartClose}/>
    </Box>
  );
}
