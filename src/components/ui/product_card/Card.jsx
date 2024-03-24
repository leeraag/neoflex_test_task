import styles from './Card.module.css'
import Price from './Price'
//import vitePluginRequire from "vite-plugin-require";

const Card = ({product}) => {
    return (
        <div key={product.id} className={styles.item}>
  
                <div 
                className={styles.image} 
                style = {{
                backgroundImage: `url(${product.img})`,
                }} />
                
                {/*<img src={`${product.img}`} alt="" />
              </div>*/}
            <div className={styles.info}>
              <h2>{product.title}</h2>
              <Price price={product.price}/>
              <p>{product.rate}</p>
              <button>Купить</button>
            </div>
        </div>
    )
}

export default Card