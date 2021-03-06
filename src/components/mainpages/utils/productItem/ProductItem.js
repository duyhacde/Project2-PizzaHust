import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product,deleteProduct, isAdmin}) {
  return (
    <div className="product_card">
        {
          isAdmin && <input type="checkbox" />
        }

        <img src={product.images.url} alt=""/>

        <div className="product_box">
            <h2 title={product.title}>{product.title}</h2>
            <span>{product.price}.000đ</span> 
            <p>{product.description}</p>
        </div>
        
        <BtnRender product={product} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ProductItem