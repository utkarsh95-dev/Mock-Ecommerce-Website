import SearchBar from "./SearchBar";
import "../styles/Shop.css";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Pay from "../assets/paytm_logo.png"; 
import ProductCard from "./ProductCard";
import data from '../../data.js' ;
import LaunchIcon from '@mui/icons-material/Launch';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
// import { Link } from "react-router-dom";
import Navigation2 from "./Navigation2";
import { useEffect } from "react";
import { MyContext } from "../MyContext";
import { useContext } from "react";

const Shop = () => {
  // console.log(cartItems);
  // const { cartItems,setCartItems } = useContext(MyContext);

  // useEffect(()=>{
  //  localStorage.setItem("cartitems",JSON.stringify(cartItems));
   
  // },[cartItems])

  // useEffect(()=>{
  //   const storedCartItems = localStorage.getItem('cartitems');
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, []);





// const {cartItems,setCartItems} = useContext(MyContext);

// useEffect(()=>{
//   localStorage.setItem("cartitems",JSON.stringify(cartItems));
  
//  },[cartItems])
//  useEffect(() => {
//   // Retrieve cartItems from localStorage when the component mounts
//   const storedCartItems = localStorage.getItem("cartitems");
//   if (storedCartItems) {
//     setCartItems(JSON.parse(storedCartItems));
//   }
// }, []);
 



  return (
    <>
    <Navigation2/>
    <div className="shop-main">
      <div className="shop-header">
        <div className="header-child1">
          <SearchBar/>
        </div>
        <div className="head-child2">
          <div><span><QrCode2Icon/><img src={Pay} alt="" style={{width:"60px"}}/></span></div>
          <div><span><QrCode2Icon/><img src={Pay} alt="" style={{width:"60px"}}/></span></div>
          <div><span><QrCode2Icon/><img src={Pay} alt="" style={{width:"60px"}}/></span></div>
          <div><span><QrCode2Icon/><img src={Pay} alt="" style={{width:"60px"}}/></span></div>
          </div>
      </div>
      <div className="shop-main-main">
        {data.map((obj)=> <ProductCard id={obj.id} 
                                      title={obj.title}
                                       price={obj.price}
                                       rating={obj.rating}
                                       reviews={obj.reviews}
                                       desc={obj.desc}
                                       img={obj.img} key={obj.id}/>)}
        
      </div>
      <footer className='intro-footer'>
        <div className="intro-footer-1 intro-foo">
          <h1 className='intro-foo-head'>Contact Us</h1>
           <span><FacebookIcon/>Facebook<LaunchIcon/></span>
            <span><TwitterIcon/>Twitter<LaunchIcon/></span> 
           <span> <LinkedInIcon/>LinkedIn<LaunchIcon/></span>
           <span> <Instagram/>Instagram<LaunchIcon/></span>
        </div>
        <div className="intro-footer-2 intro-foo">
          <h1 className='intro-foo-head'>Products</h1>
          <p>Free delivery</p>
          <p>Shipped the same day</p>
          <p>Lowest prices</p>
          <p>Highest Discounts</p>
          <p>Ecommerce Dropshipping</p>
        </div>
        <div className="intro-footer-3 intro-foo">
          <h1 className='intro-foo-head'>Sign Up for Newsletter</h1>
          <p>Our vision of the future</p>
          <p>Work At Ecommerce</p>
          <span><p>SignUp for our weekly news letter <MailOutlineIcon/></p></span>
        </div>
        <div className="intro-footer-4 intro-foo"></div>
       </footer>
    </div>
    </>
  )
}

export default Shop