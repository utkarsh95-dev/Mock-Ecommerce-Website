// import React from "react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";


export const MyContext = createContext(null);

function fillAll(){
  
  let obj ={};
  for (let i = 1; i<10; i++){
    obj[i] = 0;
  }
  return obj;
}

const MyContextProvider = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  // // Retrieve the stored cartItems from localStorage
  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem('cartitems');
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, []);

  // Set the initial state of cartItems using fillAll()
  const [cartItems, setCartItems] = useState(() => fillAll());

  // useEffect(() => {
  //   localStorage.setItem("cartitems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // Rest of your code

  // const history = useHistory();
  // const navigate = useNavigate();

  
  // console.log(cartItems);
  
  // const AddItems = (id) => {
  //   setCartItems((prev) => ( {...prev, [id]:prev[id]+1}))
  // };
  
// const AddItems = (id) => {
//   setCartItems(prev =>(
//     {...prev, [id]: prev[id]+1}
// ))  
// };
const AddItems =(id) =>{
  setCartItems((prev)=>{
    return {...prev,[id]:prev[id]+1};
  })

};


  const DeleteItems = (id) =>{
    setCartItems(prev =>(
        {...prev, [id]: prev[id]-1}
    ))
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    setLoggedIn((prev)=> !prev);
    
    // window.location.href = '/shop';
    // history.push("/shop");
    // navigate("/shop")
  }

  const deleteAll=()=>{
   let newCart = Object.keys(cartItems);
   let newObj ={}
   for(let i=1; i<=newCart.length; i++){
        newObj[i] = 0;
   }
   setCartItems(newObj)
  }
  const contextVal ={loggedIn,account,cartItems,openModal,modal2, setModal2,setOpenModal,deleteAll,setAccount,setLoggedIn,setCartItems, AddItems, DeleteItems,handleSubmit} 


  return (
    <MyContext.Provider value={contextVal}>
    
      {props.children}
      
    </MyContext.Provider>
  )
}


  export default MyContextProvider

  MyContextProvider.propTypes = {
    children: PropTypes.any,
  };
  