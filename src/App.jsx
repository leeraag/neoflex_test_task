import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {products} from './components/screens/products.data.js'
import Home from './components/screens/home/Home.jsx'
import Cart from './components/screens/cart/Cart.jsx'

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState([])
  const [productCount, setProductCount] = useState(0)
  const [cartList, setCartList] = useState([])
  const handleProduct = (selectProduct) => {
    setSelectedProduct(prevSelectedProduct => ({
    id: selectProduct.id,
    img: selectProduct.img,
    title: selectProduct.title,
    price: selectProduct.price,
    rate: selectProduct.rate
  }));
    //setSelectedProduct({id: selectProduct.id, img: selectProduct.img, title: selectProduct.title, price: selectProduct.price, rate: selectProduct.rate})
    const count = +sessionStorage.length + 1;
    sessionStorage.setItem('pr' + count, JSON.stringify(selectedProduct))
  }
  useEffect(() => {
    setCartList(prev => [...prev, JSON.stringify(selectedProduct)])
    setProductCount(cartList.length)
    //setProductCount(prevProductCount => prevProductCount + 1);
  },[selectedProduct]) 
    
  useEffect(() => {
    const keys = Object.keys(sessionStorage);
    const productsArray = [];
    keys.forEach(item => productsArray.push(sessionStorage.getItem(item)));
    setCartList(productsArray);
  },[])

    return (
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home 
                                    products={products}
                                    handleProduct={handleProduct}
                                    cartList={cartList}
                                    productCount={productCount}
                                    
                                />} />
        <Route path="cart" element={<Cart 
                                        cartList={cartList}
                                        selectedProduct={selectedProduct}
                                    />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
