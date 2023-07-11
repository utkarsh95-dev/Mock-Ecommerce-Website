import { MyContext } from "../MyContext";
import { useContext } from "react";
import '../styles/Modal.css';
import success from '../assets/success_login.svg';
import {useNavigate} from "react-router-dom";


const Modal = () => {
 const navigate = useNavigate();
 const{setOpenModal} = useContext(MyContext); 
  return (
    <div className="modal-wrapper">
    <div className="Modal-main">
        <div className="log-in-succ">
            <img src={success} alt="" />
        </div>
        <h1>Logged In Successfully</h1>
        <button className="login-btn-modal" onClick={()=>{
            setOpenModal(false);
            setTimeout(()=>{
              navigate("/shop")
            },2000)          }
          }>Continue</button>
    </div>
    </div>
  )
}

export default Modal