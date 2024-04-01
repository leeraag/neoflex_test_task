import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import Header from '../../ui/header/Header'
import Footer from '../../ui/footer/Footer'
//import {products} from '../products.data.js'
import Card from '../../ui/product-card/Card.jsx'


function Home({ products, handleProduct, cartList, productCount }) {

  return (
    <div className={styles.container}>
    <Header productCount={productCount}/>
    <div className={styles.content}>
    <div className={styles.classic}>
      <p>Наушники</p>
        {products.length ? products.slice(0, 3).map(product => {
           //const { id } = product;
           return (
          <Card key={product.id} product={product} handleProduct={handleProduct}/>
           )
           })
          : <p>Нет товаров</p>
        }
        
        {products.length ? products.slice(0, 3).map(product => (
          <Card key={product.id} product={product}  handleProduct={handleProduct}/>
          ))
          : <p>Нет товаров</p>
        }
    </div>
    <div className={styles.wireless}>
    <p>Беспроводные наушники</p>
        {products.length ? products.slice(3, 6).map(product => (
          <Card key={product.id} product={product} handleProduct={handleProduct}/>
          ))
          : <p>Нет товаров</p>
        }
    </div>
    <ul>
        {cartList.length ? cartList.map(product => (
          <li key={product.id}>{product}</li>
          ))
          : <p>Нет товаров</p>
        }
        {/*cartList.map(product => <li key={product.id}>{product}</li>)*/}
      </ul>
    </div>
    <Footer />
    </div>
  )
}

export default Home