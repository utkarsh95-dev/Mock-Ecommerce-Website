import '../styles/ListItem.css';
import { MyContext } from '../MyContext';
import { useContext } from 'react';

const ListItem = (props) => {
    const{cartItems} = useContext(MyContext);
  return (
    <div className="ListItem-main">
        <div className="ListItem-p">
        <p>{props.data.title}</p>
            <p style={{color:"#555"}}>Rs.<b>{props.data.price * cartItems[props.data.id]}<b/></b></p>
        </div>
    </div>
  )
}

export default ListItem