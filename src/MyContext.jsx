import { createContext, useState } from "react";
import PropTypes from "prop-types";
import data from "../data";

function fillAll(){
        
  let obj ={};
  for (let i = 1; i <data.length; i++){
    obj[i] = 0;
  }
  return obj;
}

export const MyContext = createContext(null);


const MyContextProvider = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal2, setModal2] = useState(false);
  const[selectItem, setSelectItem] = useState("")
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: ""
  });


    const [value, setValue] = useState(50);
  
    const handleSliderChange = (event) => {
      setValue(event.target.value);
    };

    const[search, setSearch] = useState("");
  
  
      // Set the initial state of cartItems using fillAll()
      
const [cartItems, setCartItems] = useState(() => fillAll());
      
const AddItems =(id) =>{
  setCartItems((prev)=>{
    return {...prev,[id]:prev[id]+1};
  })

};

const handleDisplayDiv=(item)=>{
  setSelectItem(item);
}

const handleLogOut= ()=>{
  window.localStorage.clear();
  window.location.href = "/intro"; 
}

const handleSearch =(e)=>{
    setSearch(e.target.value);
    console.log(search)
}

  const DeleteItems = (id) =>{
    setCartItems(prev =>(
        {...prev, [id]: prev[id]-1}
    ))
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    setLoggedIn((prev)=> !prev);
    
  }

  const deleteAll=()=>{
   let newCart = Object.keys(cartItems);
   let newObj ={}
   for(let i=1; i<=newCart.length; i++){
        newObj[i] = 0;
   }
   setCartItems(newObj)
  }
  const contextVal ={loggedIn,account,cartItems,openModal,modal2, value, search, selectItem, setSelectItem ,handleSearch, setSearch,setValue, setModal2,setOpenModal,deleteAll,setAccount,setLoggedIn,setCartItems, AddItems, DeleteItems,handleSubmit,handleSliderChange,handleDisplayDiv,handleLogOut} 


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
  