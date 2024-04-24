import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
               return  <div>
               <div className="cartitems-format cartitems-format-main">
                   <img src={e.image} alt="" className='carticon-product-icon'/>
                   <p>{e.name}</p>
                   <p>${e.new_price}</p>
                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                   <p>${e.new_price*cartItems[e.id]}</p>
                   <img className='cartitems-remove-icon' src={remove_icon}onClick={()=>{removeFromCart(e.id)}} alt="" />
               </div>
               <hr /> 
                </div>
                  
            }
            return null ;
       })}
       <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHRCKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
       </div>
        </div>
     </div>
  )
}

export default CartItems
