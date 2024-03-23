import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header_logo}>
                <p>Qpick</p>
            </div>
            <div className={styles.header_cart}>
                <a href="https://vk.com/" className={styles.fav}><img src="src/assets/icons/fav.svg"/></a>
                <a href="https://t.me/" className={styles.cart}><img src="src/assets/icons/cart.svg"/></a>
            </div>
        </header>
    )
}
export default Header