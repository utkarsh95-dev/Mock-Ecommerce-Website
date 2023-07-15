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
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { useRef,useContext } from "react";
import { MyContext } from "../MyContext";

// import { useEffect } from "react";
// import { MyContext } from "../MyContext";
// import { useContext } from "react";


const Shop = () => {
  // console.log(cartItems);
  // const { cartItems,setCartItems } = useContext(MyContext);

// const {cartItems,setCartItems} = useContext(MyContext);
 const{value,handleSliderChange} = useContext(MyContext);
const btnRef = useRef(null);

function handleFilter(){
  if(btnRef){
    btnRef.current.classList.add("active");
  }
}

function handleRemove(){
  if(btnRef){
    btnRef.current.classList.remove("active");
  }
}


  return (
    <>
    <Navigation2/>
    <div className="shop-main">
      <div className="shop-header">
        <div className="header-child1">
         <button className="top-shop-abs-filter" onClick={()=> handleFilter()} > <TuneIcon/>  </button>
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
       <div className="shop-filter-absolute" ref={btnRef}>
       <button className="shop-filter-btn" onClick={()=> handleRemove()}><CloseIcon/></button>
        <h1>Filters</h1>
        <div className="shop-filter-category">
          <h3>Category</h3>
          <p className="shop-filter-cat1">All</p>
          <p className="shop-filter-cat2">Gadgets & Accessories</p>
          <p className="shop-filter-cat3">Watches</p>
          <p className="shop-filter-cat4">Computers/Laptops</p>
          <p className="shop-filter-cat5">Shoes</p>
        </div>
        <div className="shop-filter-company">
          <h3 style={{fontSize:"16px"}}>Company</h3>
          <form action="">
            
            <select name="brand" id="brand">
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="levis">Levis</option>
              <option value="casio">Casio</option>
              <option value="mi">MI</option>
              <option value="realme">Realme</option>
            </select>

      
          </form>
        </div>
        <div className="shop-filter-colors">
          <h4 >Colors</h4>
          <div className="colors-red"></div>
          <div className="colors-green"></div>
          <div className="colors-white"></div>
          <div className="colors-blue"></div>
          <div className="colors-yellow"></div>
        </div>
        <div className="shop-filter-slider">
          <h4>Price</h4>
          <p>${value}</p>
          <input
            type="range"
            min="0"
            max="1000"
            value={value}
            onChange={handleSliderChange}
          />
        </div>
        <div className="shop-filter-clear">
        <button className="clear-filter">CLEAR FILTER</button>
        </div>
       </div>
    </div>
    </>
  )
}

export default Shop