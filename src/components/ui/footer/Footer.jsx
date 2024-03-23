import styles from './Footer.module.css'
const Footer = () => {

    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <p>Qpick</p>
            </div>
            <div className={styles.footer_right}>
                <a href="#">Избранное</a>
                <a href="#">Корзина</a>
                <a href="#">Контакты</a>
            </div>
            <div className={styles.footer_left}>
                    <a href="#">Условия сервиса</a>
                    <img src="src/assets/icons/lang.svg"/>
                    <a href="#">Рус</a>
                    <a href="#">Eng</a>
            </div>
            <div className={styles.footer_social_logo}>
                    <a href="https://vk.com/"><img src="src/assets/icons/vk.svg"/></a>
                    <a href="https://t.me/"><img src="src/assets/icons/Telegram.svg"/></a>
                    <a href="https://www.whatsapp.com/"><img src="src/assets/icons/Whatsapp.svg"/></a>
            </div>

            </footer>
    )
}
export default Footer