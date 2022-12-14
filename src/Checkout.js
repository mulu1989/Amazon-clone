import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'


function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad'
            src='https://m.media-amazon.com/images/I/511PMq8mF+L.jpg'
            alt=""/>
            

            <div >
                 <h2 className='checkout_title'>your shopping Basket
                 </h2>
                 {basket.map(item =>(
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                 ))}




            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal /> 

        </div>
    
    </div>
  )
}

export default Checkout