import { useState } from 'react'
import styles from './Cart.module.css'
import Header from '../../ui/header/Header'
import Footer from '../../ui/footer/Footer'
import Order from '../../ui/place-order/Order'
import OrderItem from '../../ui/order-item/OrderItem'

const Cart = ({cartList, selectedProduct}) => {
  //console.log(cartList)
  return (
    <div className={styles.container}>
    <Header />
    <div className={styles.content}>
        <ul className="cart-list">
        {/*<Card key={product.id} product={product}/>*/}
             {cartList.length ? cartList.map((selectedProduct) => {
              return (
                <li >
                  <OrderItem key={selectedProduct.id} selectedProduct={selectedProduct}/>
                </li>
              )
            })
            : <p>Нет товаров</p> 
          }
            </ul>
        <Order />

    </div>
    <Footer />
    </div>
  )
}

export default Cart