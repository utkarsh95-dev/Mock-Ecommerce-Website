import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import Intro from './components/Intro'
import Shop from './components/Shop'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import { useContext,useEffect } from 'react';
import { MyContext } from './MyContext';


function App() {
const {cartItems,setCartItems,setLoggedIn,setAccount} = useContext(MyContext);

useEffect(()=>{
  const storedCartItems = window.localStorage.getItem('cartitems');
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
  }
}, []);

useEffect(()=>{
  const loggedIn = window.localStorage.getItem('loggedIn');
  if(loggedIn){
    setLoggedIn(JSON.parse(loggedIn));
  }
})

useEffect(()=>{
  const user = window.localStorage.getItem("user");
  if(user){
    setAccount(JSON.parse(user));
  }
},[])

useEffect(()=>{
  window.localStorage.setItem('cartitems',JSON.stringify(cartItems));
  
 },[cartItems])



  return (
    <Router>
      
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/checkout" element={<CheckOut/>}/>
        <Route  path="/intro" element={<Intro/>}/>
        <Route  path="/shop" element={<Shop/>}/>
        <Route  path="/signin" element={<SignIn/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/account" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
