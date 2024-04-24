import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay  (props)  {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list" >
                <img src={product.image} alt=""  />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-right-price">
                <div className="product-right-price-old">${product.old_price}</div>
                <div className="product-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-right-decription">
                faqra ala l produiet lkol kifeh kjdbvbrjhbvrvrejrb
                rjhfveblqknklsbcgw  diuzriefjkb fiuhewufjnbfggefm uehf fkj buief bf
                jbfh biebfnefiw duiwd nlqwd  wdiöwmh zu fnvewctdcvzedfh uefg juj
            </div>
            <div className="product-right-size">
                <h1>Select size</h1>
                <div className="displayproduct-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                <p className='product-right-category' ><span>Category :</span> Women , t-shirt , Corp-top</p>
                <p className='product-right-category' ><span>Tags :</span> Modern , Latest </p>
                    
            </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay
