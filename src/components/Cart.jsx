import {MyContext} from "../MyContext";
import { useContext } from "react";
import {useNavigate} from "react-router-dom";
import '../styles/Cart.css';
import data from "../../data";
import CartCard from "./CartCard";
import Navigation2 from "./Navigation2";
import cartIcon from "../assets/icons8-cart-64.png";
import ListItem from './ListItem';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { Stepper,Step,StepContent,StepLabel,Typography } from "@mui/material";
const Cart = () => {
  const {cartItems,deleteAll} = useContext(MyContext);
  const navigate = useNavigate();
   let TotalItems = Object.values(cartItems).reduce((acc,curr)=>{
      return acc += curr;
    },0)
 
    let newest=[]
    for(let item in cartItems){
      if (cartItems[item] >0){
      newest.push(item);
      }
    }
  let newstkabhinewst =[]
    for(let i=0;i<=data.length-1;i++){
      for(let j=0; j<= Object.values(cartItems).length-1; j++){
        if(Number(data[i].id) === Number(Object.keys(cartItems)[j]) && cartItems[data[i].id] > 0){
          newstkabhinewst.push(Number(Object.keys(cartItems)[j]))
        }
      }
      
    }
    let TotalAmt =0;
    for(let i=0;i<=data.length-1;i++){
      for(let j=0;j<=newstkabhinewst.length-1;j++){
        if(data[i].id === Number(newstkabhinewst[j])){
          TotalAmt += data[i].price * cartItems[data[i].id];  
        }
      }
    }

    console.log("totalAmount", TotalAmt)
    console.log("newstkabhinewst:", newstkabhinewst);
    
    // console.log("newwst:", newest);
// Object.values(cartItems).forEach((ele)=>{
//   console.log(ele);
// })

// data.map((obj)=>{
//   console.log(obj.id)
// })
// console.log(cartItems)

// console.log(nZeroArr)

// let subtotal= ()=>{ 
//   let totalAMnt = 0;
//   nZeroArr.map((obj)=>{
//   for(let item in cartItems){
//     if(obj.id === item){
//       totalAMnt += obj.price;
//     }
//   }
  
// })
// return totalAMnt;
// }

// let x= subtotal();
// console.log(x);


  return (
    <>
    <Navigation2/>
    { 
    TotalItems > 0 ?
    <div className="cart-cont">
    <div className="cart-intro">
      <div className="cart-intro-intro">
    <h1>Welcome To Your Cart <img src={cartIcon} alt="" /><button className="btn-float" onClick={()=> deleteAll()}><DeleteForeverIcon /></button></h1><p style={{color:"#777"}}>This is where you will find items for your orders, <b>CHECK OUT MORE IN STORE</b> </p>
      </div>
    </div>
    <div className="cart-card-cards">
    {data.map((dataObj)=>{
      if(cartItems[dataObj.id] > 0){
        return <CartCard data={dataObj} key={dataObj.id}/>
      }
    })}
    </div>
    
    
    {/* <div className="cart-abs-porgress">
      <Stepper orientation="vertical" activeStep={1}>
       
        <Step>
          <StepLabel>
            <h3>product ordered</h3>
          </StepLabel>
          <StepContent>
            <Typography>
            Lorem ipsum dolor sit
               amet consectetur, adipisicing elit. Minus ad sunt
                nihil pariatur tenetur. Laborum illum in ratione
                 nihil delectus tempora officiis corrupti nostrum
                  vitae.
            </Typography>
          </StepContent>
        </Step>

        <Step>
          <StepLabel>
          <h3>added to acrrt</h3>
          </StepLabel>
          <StepContent>
            <Typography>
            Lorem ipsum dolor sit
               amet consectetur, adipisicing elit. Minus ad sunt
                nihil pariatur tenetur. Laborum illum in ratione
                 nihil delectus tempora officiis corrupti nostrum
                  vitae.
            </Typography>
          </StepContent>
        </Step>


        <Step>
          <StepLabel>
          <h3>product reviwed</h3>
          </StepLabel>
          <StepContent>
            <Typography>
              Lorem ipsum dolor sit
               amet consectetur, adipisicing elit. Minus ad sunt
                nihil pariatur tenetur. Laborum illum in ratione
                 nihil delectus tempora officiis corrupti nostrum
                  vitae.
            </Typography>
          </StepContent>
        </Step>
      
      </Stepper>
    </div> */}
    <div className="cart-abs-total-checkout">
      
    <div className="cart-abs-head">
            <h2>Your Cart Items:</h2>
        </div>
      {data.map((ele)=>{
        if(cartItems[ele.id] > 0){
         return <ListItem data ={ele} key={ele.id}/>
        }
      })}
      <div className="cart-subtotal">
        <h4>SUBTOTAL:</h4>
        <h4><b>{TotalAmt}</b></h4>

      </div>
      <div className="cart-btn-abs-total">
      <button onClick={()=> navigate("/shop")} className="cart-abs-total-btn">CHECKOUT</button>

      </div>
    </div>

    
     
    
    </div> :
    <div className="cart-intro">
     <div className="cart-intro-intro2">
     <h1>Your Cart is Empty <img src={cartIcon} alt="" /></h1>      <p style={{color:"#777"}} className="abs-abs-cart-p">This is where you will find items for your orders, <b>CHECK OUT MORE IN STORE</b> </p>
       </div>
       </div>
    }
    </>
  )
}

export default Cart