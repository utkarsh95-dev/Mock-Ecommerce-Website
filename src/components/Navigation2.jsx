import '../styles/Navigation2.css';
import Logo from '../assets/logo.png';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { MyContext } from '../MyContext';
import { useContext } from 'react';


const Navigaton2 = () => {
const{cartItems} =  useContext(MyContext);

let cartItemCount = 0;
  for(let item in cartItems ){
    cartItemCount += cartItems[item];
  }
  
let val= false;
function value (){
  for (let i in cartItems){
    if(cartItems[i]>0){
      return true;
    }
  }
  return false;
}
val = value();
    
     

  return (
  
    
    <div className="Navigation2-head">
        <Link to="/intro"><img src={Logo} alt="Logo" id="nav2-logo" /></Link>
        <div className="nav2-options">
        <div className="sub-sub">
          <Link to="/" style={{fontSize:"13px"}} >HELP <HeadphonesIcon sx={{fontSize:"18px",marginLeft:"5px"}} /></Link>
        </div>
        <div className="sub-sub">
          <Link to="/shop" style={{fontSize:"13px"}} >SHOP <StoreIcon sx={{fontSize:"22px",marginLeft:"5px"}}/></Link>
        </div>
        <div className="sub-sub">
          <Link to="/cart" style={{fontSize:"13px"}}>CART <div className={val? "joy dotted": "joy"}><ShoppingCartCheckoutIcon sx={{fontSize:"19px",marginLeft:"5px"}} /></div></Link>
        </div>
        <div className="nav2-options-drop">
          <div className="sub">
            <h2 style={{fontSize:"13px"}}>PRODUCTS <ExpandMoreIcon/></h2>
          </div>
          <div className="nav2-options-drop-sub">
            <span> <Link to="/signup">Delivery Agents</Link> </span>
            <span><Link to="/signup">Shipping Products</Link></span>
            <span><Link to="/signup">QUality Assuraance</Link></span>
          </div>
        </div>
        <div className="nav2-options-acc">
          <h2 style={{fontSize:"13px"}}>PROFILE</h2>
          <Link to="/account"><Avatar sx={{ bgcolor:'green',fontSize:"12px",width:28,height:28,marginLeft:"5px" }}>U</Avatar></Link>
        </div>
      </div>
    </div>
    
  )
}

export default Navigaton2