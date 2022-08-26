import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { styled } from '@mui/material/styles';
import {Menu, MenuItem, Box} from '@mui/material';
import SubCategoryItems from './SubCategoryItems';

const CategoryItem = styled('div')(({theme}) => ({
  display: 'flex',
  direction: 'column'
}))

export default function CategoryItems(props) {
  const categories = props.categories;
  const handleCloseParent = props.handleClose;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event, id) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }


  

  return (
    <div>
        {categories.map((category) => (
          
          <MenuItem value={category.title} key={category.id}>
            <CategoryItem 
            sx={{
              height: '100%',
              width: '100%'}}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
              <div>{category.title}</div>
              <Box sx={{display: {xs: 'none', sm: 'block'}, flexGrow: 1}}/>
              <div><KeyboardArrowRightIcon sx={{ backgroundColor: 'transparent'}}/></div>
            </CategoryItem>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
              <SubCategoryItems categoryId={category.id} onClose={handleCloseParent}/>
            </Menu>
          </MenuItem>
        ))}
    </div>
  )
}

