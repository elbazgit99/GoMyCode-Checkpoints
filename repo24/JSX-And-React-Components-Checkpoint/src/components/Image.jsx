import React from 'react'
import product from '../product.jsx'
import Card from 'react-bootstrap/Card'


const Image = () => {
     return(
          <>
               <Card.Img variant ="top" src={product.imageUrl} alt={product.name} className='product-image' />
          </>
     )
}

export default Image