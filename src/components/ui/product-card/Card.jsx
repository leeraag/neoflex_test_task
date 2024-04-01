import styles from './Card.module.css'
import { useState, useEffect, useCallback } from 'react'
const Card = ({product, handleProduct}) => {
  
    return (
        <div key={product.id} className={styles.item}>
          <div 
            className={styles.image} 
            style = {{
            backgroundImage: `url(${product.img})`,
            }} />
          <table>
          <tbody>
            <tr>
              <td><p className={styles.title}>{product.title}</p></td>
              {/*<td><Price price={product.price} className={styles.price}/></td>*/}
              <td><p className={styles.price}>
                  {new Intl.NumberFormat('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  }).format(product.price)}
                </p></td>
            </tr>
            <tr className={styles.rate}>
              <td><p>
              <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.627 18.0317L5.41636 22.3808L7.37665 14.264L0.960938 8.83663L9.38233 8.17032L12.627 0.465393L15.8716 8.17032L24.2943 8.83663L17.8773 14.264L19.8376 22.3808L12.627 18.0317Z" fill="#FFCE7F"/>
              </svg>
                {product.rate}
                </p>
              </td>
              <td ><button onClick={() => handleProduct(product)}>Купить</button></td>
            </tr>
          </tbody>
        </table>

        
        </div>
    )
}

export default Card