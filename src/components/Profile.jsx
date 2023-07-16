import { MyContext } from "../MyContext";
import { useContext } from "react";
import Navigation2 from "./Navigation2";
import '../styles/Profile.css';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WalletIcon from '@mui/icons-material/Wallet';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import MyOrderItems from './MyOrderItems';
import data from "../../data";


const Profile = () => {
  const{account,selectItem, handleDisplayDiv,handleLogOut,cartItems } = useContext(MyContext);
  console.log("account",account);
  return (
    <>
    <Navigation2/>
    <div className="pro-main-cont">
      <div className="pro-main-cont-ainers">
        <div className="pro-main-settings">
          <div className="pro-main-acc">
            <div className="pro-main-acc-pic">
                  <Avatar sx={{width:"31px", height:"31px"}}/>               
            </div>
                  <h2 style={{fontSize:"14px",fontFamily:" 'Roboto', sans-serif"}}>{account.name} bhatnagar</h2>
          </div>
          <div className="pro-main-my-orders" onClick={()=> handleDisplayDiv("my-orders")}>
          <FavoriteBorderIcon sx={{marginLeft:"15px", width:"21px", height:"21px"}}/> <h3>My Orders</h3>
          </div>
          <div className="pro-main-payment" onClick={()=> handleDisplayDiv("my-payment")}>
          <PaymentIcon sx={{marginLeft:"15px", width:"21px", height:"21px"}}/> <h3>Payment Method</h3>
          </div>
          <div className="pro-main-manage-acc" onClick={()=> handleDisplayDiv("my-manage-acc")}>
          <ManageAccountsIcon sx={{marginLeft:"15px", width:"21px", height:"21px"}}/> <h3>Manage Account</h3>
          </div>
          <div className="pro-main-wallet"  onClick={()=> handleDisplayDiv("my-wallet")}>
          <WalletIcon sx={{marginLeft:"15px", width:"21px", height:"21px"}}/> <h3>Add Wallet</h3>
          </div>
          <div className="pro-main-address"  onClick={()=> handleDisplayDiv("my-address")}>
          <PinDropIcon  sx={{marginLeft:"15px", width:"21px", height:"21px"}}/> <h3>Saved Addresses</h3>
          </div>
          <div className="pro-main-my-wishlist"  onClick={()=> handleDisplayDiv("my-wishlist")}>
          <SynagogueIcon   sx={{marginLeft:"15px", width:"21px", height:"21px"}} /> <h3>My Wishlist</h3>
          </div>
        </div>
        <div className="pro-main-profile">
          <div className={`pro-main-one ${selectItem === "my-orders" ? "activated" : ""}`} >
            <div className="pro-main-main-one-head">
              <div className="pro-main-one-profile">
              <Avatar sx={{width:"51px", height:"51px"}}/>
              <h2>{(account.name).charAt(0).toUpperCase()+ account.name.slice(1)} Bhatnagar</h2> 
              </div>
              <button onClick={()=> handleLogOut()}>LOGOUT</button>
            </div>
            <div className="pro-main-item-conatiner">
              {data.map((ele)=>{
                if(cartItems[ele.id]>0){
                return  <MyOrderItems data={ele} key={ele.id}/>
                }
              })}
            </div>

          </div>
          <div className={`pro-main-two ${selectItem === "my-payment" ? "activated" : ""}`} >
          <div className="pro-main-two-two">
            <h3>Add Card</h3>
              <select name="select" id="payment" placeholder="select">
                <option value="visa">VISA</option>
                <option value="master card">MASTER CARD</option>
                <option value="upi">UPI</option>
              </select>
              <div className="pro-main-two-visa">
                
              </div>
           </div>
            
          </div>
          <div className={`pro-main-three ${selectItem === "my-manage-acc" ? "activated" : ""}`} ></div>
          <div className={`pro-main-four ${selectItem === "my-wallet" ? "activated" : ""}`} ></div>
          <div className={`pro-main-five ${selectItem === "my-address" ? "activated" : ""}`} ></div>
          <div className={`pro-main-six ${selectItem === "my-wishlist" ? "activated" : ""}`} ></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
