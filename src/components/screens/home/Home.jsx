import { useState } from 'react'
import styles from './Home.module.css'
import Header from '../../ui/header/Header'
import Footer from '../../ui/footer/Footer'
import {products} from '../products.data.js'
import Card from '../../ui/product_card/Card'


function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      
    <div className={styles.classic}>
      <p>Наушники</p>
        {products.length ?products.slice(0, 3).map(product => (
          <Card key={product.id} product={product}/>
          ))
          : <p>Нет товаров</p>
        }
        {products.length ?products.slice(0, 3).map(product => (
          <Card key={product.id} product={product}/>
          ))
          : <p>Нет товаров</p>
        }
    </div>
    <div className={styles.wireless}>
    <p>Беспроводные наушники</p>
        {products.length ?products.slice(3, 6).map(product => (
          <Card key={product.id} product={product}/>
          ))
          : <p>Нет товаров</p>
        }
    </div>
    
    </div>
    <Footer />
    </div>
  )
}

export default Home