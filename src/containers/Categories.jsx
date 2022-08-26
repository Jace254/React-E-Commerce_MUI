import React from 'react';
import useFetch from '../test-hooks/useFetch';
import { styled } from '@mui/material/styles';
import {Menu, MenuItem, Button } from '@mui/material';
import CategoryItems from '../components/ListItems/CategoryItems';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CategoriesDropDown = styled('div')(({theme}) => ({
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    flexGrow: 1,
}))

export default function Categories() {

    const { data: categories, error, isPending } = useFetch('http://localhost:8000/categories');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant={'text'}
                sx={{color: 'white'}}
                onClick={handleClick}
            >
                <CategoriesDropDown>
                    <div>Categories</div>
                    <KeyboardArrowDownIcon sx={{color: 'white'}}/>
                </CategoriesDropDown>
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
                {error &&  <MenuItem>{ error }</MenuItem> }
                {isPending && <MenuItem>Loading...</MenuItem> }
                {categories && <CategoryItems categories={ categories } handleClose={handleClose}/>}
            </Menu>
        </div>
    )
}
