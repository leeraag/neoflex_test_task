import { useState } from 'react'
import styles from '../home/Home.module.css'
import Header from '../../ui/header/Header'
import Footer from '../../ui/footer/Footer'


function Cart() {
  return (
    <div className={styles.container}>
    <Header />
    <div><h1>Cart</h1></div>
    <Footer />
    </div>
  )
}

export default Cart