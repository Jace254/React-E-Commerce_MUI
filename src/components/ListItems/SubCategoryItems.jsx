import React from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../test-hooks/useFetch';


export default function SubCategoryItems(props) {


  const categoryId = props.categoryId;
  const onClose = props.onClose;
  const { data: category, error, isPending } = useFetch('http://localhost:8000/categories/'+ categoryId);

  const navigate = useNavigate()


  const handleClick = () => {
    onClose();
    navigate('/SubCategory');
  }
  
  return (
    <div>
      {isPending && <MenuItem>Loading...</MenuItem>}
      {error && <MenuItem>{error}</MenuItem>}
      {category && category.subCategories.map((subCategory) => (
        // eslint-disable-next-line eqeqeq
        category.subCategory.categoryId == categoryId ?
          <MenuItem
            value={category.subCategory.title} 
            key={category.subCategory.id}
            onClick={handleClick}>
            { subCategory.title }
          </MenuItem> : null
      ))}
    </div>
  )
}