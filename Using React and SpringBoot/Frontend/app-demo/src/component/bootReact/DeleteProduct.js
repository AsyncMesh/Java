import React from 'react'
import axios from 'axios';

const DeleteProduct = ({id,setDelete}) => {
    function deleteProductHandler() {
        axios.delete(`http://localhost:1004/product/del/${id}`)
            .then(response => {
                console.log('Product Deleted successfully:', response.data);
                setDelete(id);
            })
            .catch(error => {
                console.error('There was an error deleting the product!', error);
            });
    }

  return (
    <div>
        <button className='btn btn-danger text-white' onClick={deleteProductHandler}>Delete</button>
    </div>
  )
}

export default DeleteProduct