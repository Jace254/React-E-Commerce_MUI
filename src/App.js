import React from 'react'
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Products/HomePage";
import Checkout from "./pages/CheckoutPage";
import SubCategory from './pages/Products/SubCategoryPage';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/Checkout"} element={<Checkout/>}/>
            <Route path={"/SubCategory"} element={<SubCategory/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
