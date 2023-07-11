import { MyContext } from "../MyContext";
import '../styles/CartCard.css'
import { useContext,useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const CartCard = (props) => {
    const{cartItems,AddItems,DeleteItems} = useContext(MyContext);
    const[input,setInput] = useState(props.data.id);
    return (
  <>
    <div className="cart-card-main">
        <div className="cart-card-prod-pic">
            <img src={props.data.img} alt="" />
        </div>
        <div className="cart-card-prod-details">
            <div className="cart-card-prod-det">
            <h2 className="cart-prod-name">{props.data.title}</h2>
            <div className="cart-card-btn-grp">
                <button className="cart-sub" onClick={()=>DeleteItems(props.data.id)}><IndeterminateCheckBoxIcon sx={{height:"18px"}}/></button>
                <input type="number" value={cartItems[props.data.id]} className="cart-input" onChange={(e)=> setInput(e.target.value) }/>
                <button className="cart-add" onClick={()=>AddItems(props.data.id)}><AddBoxIcon sx={{height:18}}/></button>
            </div>
            <p style={{position:"absolute",fontSize:"12px", marginTop:"48px", marginLeft:"15px"}}><small style={{color:"#555"}}>{props.data.seller}</small></p>
            </div>
            
           
            <div className="cart-price-info">
            <h1 className="cart-card-amt">
                ${props.data.price}
            </h1>
            <p style={{fontSize:10}}>${props.data.price + props.data.price * props.data.discount}</p>
            <p style={{fontSize:10, color:"#555",marginLeft:5}}>{props.data.discount*100}% off</p>

        </div>
    </div>
    </div>
    </>
  )
}

export default CartCard