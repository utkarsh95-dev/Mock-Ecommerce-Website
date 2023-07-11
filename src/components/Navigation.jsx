// import  {  } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../assets/logo.png';
import '../styles/Navigation.css';
import { MyContext } from '../MyContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Navigation = () => {
  // const targRef = useRef(null);
  // let scrollend = 0;
  // let scroller = window.scrollY || this.document.documentElement.scrollTop;
  
  // useEffect(()=>{
  //   let scroller = window.scrollY;
  //   const nav = document.getElementById("navz");
    
  //   window.addEventListener("scroll",function(){
  //     if (scroller < window.scrollY){
        
  //       nav.style.top ="-60px"
  //     }else{
        
  //       nav.style.top="0px"

  //     }
  //   })
  // },[])
  const{loggedIn,setLoggedIn} = useContext(MyContext);

  useEffect(()=>{
    let log = localStorage.getItem("isloggedin");
        setLoggedIn(JSON.parse(log));
        console.log(loggedIn)
  },[loggedIn])

  return (
    <div className='Navigation-head'  id="navz">
      <Link to="/intro"><img src={Logo} alt="Logo" id="nav-logo" /></Link>
      <div className="nav-options">
        <div className="sub-sub">
          <Link to="/">HOME</Link>
        </div>
        <div className="sub-sub">
          <Link to="/">ABOUT US</Link>
        </div>
        <div className="sub-sub">
          <Link to="/">CONTACT US</Link>
        </div>
        <div className="nav-options-drop">
          <div className="sub">
            <h2>SIGN UP <ExpandMoreIcon/></h2>
          </div>
          <div className="nav-options-drop-sub">
            <span> <Link to="/signup"> <GoogleIcon sx={{color:"red", marginRight:"5px", fontSize:"20px"}} /> GOOGLE</Link> </span>
            <span><Link to="/signup"><FacebookIcon sx={{color:"blue", marginRight:"5px", fontSize:"20px"}} /> FACEBOOK</Link></span>
            <span><Link to="/signup"> <TwitterIcon sx={{color:"blue", marginRight:"5px", fontSize:"20px"}} />TWITTER</Link></span>
          </div>
        </div>
        <div className="nav-options-acc">
          {loggedIn ? <h2>PROFILE</h2>:<h2>SIGN IN</h2>}
          <Link to={loggedIn?"/account":"/signin"}><AccountCircleIcon sx={{fontSize:"25px", color:"black"}}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

