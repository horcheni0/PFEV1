
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Loginsignup from './Pages/loginsingnup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kids_banner from './Component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}  />
            <Route path='/men'   element={<ShopCategory banner={men_banner}   category='men'/>}/>             
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>                      
            <Route path='/kids'  element={<ShopCategory banner={kids_banner}  category='kids'/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path="/product/:productId" element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart/>}  />
            <Route path='/loginsingnup' element={<Loginsignup/>}  />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
   
      
  );
    
  
}

export default App;

