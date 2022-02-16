import React from 'react'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Echodevice21/PDPC05July/PC-PD21-StoreHeader.jpg'
          alt=''
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          {basket.map((item) => (
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
      <div className='checkout__right'>
        <Subtotal />

        <Link to='/'>
          <img
            className='header__logo'
            src='https://i.pinimg.com/originals/e0/a8/2a/e0a82a76d0315c7b2858fdd9187fd597.png'
          />
          {/* {' '}
        {user ? 'Sign Out' : 'Sign In'} */}
        </Link>
      </div>
    </div>
  )
}

export default Checkout
