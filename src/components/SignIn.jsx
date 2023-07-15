import Login from '../assets/4957136.jpg';
import '../styles/SignIn.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PropTypes  from 'prop-types';
import { useContext,useEffect } from 'react';
import { MyContext } from '../MyContext';
import { useFormik } from 'formik';
import { SignInSchema } from '../UserSchema/SignInSchema';
import Navigation from './Navigation';
import Modal from './Modal.jsx';
import UserInfo from '../UserInfo';


const initialValues = {
  name:"",
  email:"",
  password:"",
}
const SignIn = () => {

  
  // useEffect(() => {
  //   if (loggedIn) {
  //     // Update cartItems in localStorage whenever loggedIn changes
  //     localStorage.setItem("cartitems", JSON.stringify(cartItems));
  //   }
  // }, [loggedIn, cartItems]);
 
  const {setAccount,openModal,setOpenModal,loggedIn,setLoggedIn,account } = useContext(MyContext);
 const {values,errors,handleSubmit,handleBlur, handleChange,touched} = useFormik({initialValues: initialValues,
          validationSchema:SignInSchema,
          onSubmit:(values,action)=>{
            UserInfo.map((user)=>{
              // console.log(user)
              if(user.name === values.name && user.email === values.email && user.password === values.password){
                // console.log(`name:${user.name}, email:${user.email}, pass:${user.password}`)
                setAccount({
                  name: values.name,
                  email: values.email,
                  password: values.password,
                })
                setLoggedIn(true);
                // console.log(loggedIn);
                setOpenModal(true);
                //  localStorage.setItem("user", JSON.stringify(account));
                //  localStorage.setItem("isloggedin",JSON.stringify(loggedIn));
                //  console.log(account);

                return;
              }   
                  else
              {
                console.log("login failed");

              }
            })           
            action.resetForm();
          }})
          useEffect(()=>{
            window.localStorage.setItem("loggedIn",loggedIn);
          },[loggedIn]);

          useEffect(()=>{
            window.localStorage.setItem("user",JSON.stringify(account));
          })
  
  return (
    <>
    <Navigation/>
    <div className="signin-head">
      <div className="sign-console">
        <div className="sign-in">
        <form onSubmit={handleSubmit} className="grid-form">
  <span id="form-first">
    <label htmlFor="name">UserName</label>
    <input type="text" placeholder="UserName" id="name" name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur} />
  </span>
  {errors.name && touched.name ? <p className='error-name'><small>{errors.name}</small></p>: null}
  <span id="form-first1">
    <label htmlFor="email">Email</label>
    <input type="email" placeholder="email@example.com"  id="email" name="email" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
  </span>
  {errors.email && touched.email ?<p className='error-email'><small>{errors.email}</small></p>: null}
  <span id="form-first2">
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="enter password" name="password" id="password" autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur} />
  </span>
  {errors.password && touched.password ? <p className='error-password'><small>{errors.password}</small></p>: null}
  {/* <span id="form-first3">
    <label htmlFor="password">Re-enter password</label>
    <input type="password" />
  </span> */}
  <input type="submit" value="SIGN IN"/>
</form>


        </div>
      </div>
      <div className="sign-console1">
      <img src={Login} alt="" />
      </div>
      <h1 className="abs-sign-in">SIGN IN</h1>
      <p className="abs-forg">forgot password?</p> 

      <p className="signin-goog">Or SignUp Using</p>
      <div className="signin-meth-abs">
        <FacebookIcon sx={{fontSize:"28px", cursor:"pointer"}}/>
        <TwitterIcon sx={{fontSize:"28px", cursor:"pointer"}}/>
        <GoogleIcon sx={{fontSize:"28px", cursor:"pointer"}}/>
      </div>
      {openModal && <Modal/>}
    </div>
    </>
  )
}

export default SignIn

SignIn.propTypes ={
  onSign  : PropTypes.any,
}