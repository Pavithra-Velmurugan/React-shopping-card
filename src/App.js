import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { Cart } from './components/cart';
import { ProductsPage } from './components/productspage';
import { Home } from './components/home';



function App() {


  return (

    
    <div className="App"> 
        <Routes>   
        <Route path="/" element={<ProductsPage/>}/> 
          <Route path="/home" element={<Home />} />             
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>

  );
}

export default App;
