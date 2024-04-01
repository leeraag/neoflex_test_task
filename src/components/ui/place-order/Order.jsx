import styles from './Order.module.css'

const Order = () => {
    return (
        <div className={styles.order_container}>
            <p>Итого</p>
            <button className={styles.order_button}>Перейти к оформлению</button>
        </div>
    )
}

export default Order