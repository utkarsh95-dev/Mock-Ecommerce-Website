// import Data from "../../data.js";
import PropTypes  from "prop-types";
import { useContext } from "react";
import '../styles/ProductCard.css';
import {MyContext} from"../MyContext";

const ProductCard = ({id,img,price,title,reviews,rating,desc}) => {
    const{cartItems,AddItems} = useContext(MyContext);

  return (
    <div className="prod-card">
      <div className="prod-img">
        <img src={img} alt="image" />
      </div>
      <div className="prod-head">
        <h1>{title}</h1>
        <p>{rating}</p>
      </div>
      <div className="prod-desc">
        <p>{desc.slice(0,28)+"..."}</p>
        <p><b>({String(reviews).replace("_",",")})</b></p>
      </div>
      <div className="prod-add-btn">
        <h2>${price}</h2>
        <button onClick={()=> AddItems(id)}>Add to cart{cartItems[id] > 0 ? `(${cartItems[id]})` : ""}</button>
      </div>
    </div>
  )
}

export default ProductCard

ProductCard.propTypes = {
 img:PropTypes.any,
 title:PropTypes.any,
 reviews:PropTypes.any,
 rating:PropTypes.any,
 price:PropTypes.any,
 desc:PropTypes.any,
 id:PropTypes.any,
}