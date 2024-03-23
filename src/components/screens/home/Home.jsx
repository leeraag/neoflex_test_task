import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './Home.module.css'
import '../../ui/footer/Footer'
import Header from '../../ui/header/Header'
import Footer from '../../ui/footer/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

      <div className={styles.card}>
        
      </div>
      
      <Footer />
    </>
  )
}

export default Home