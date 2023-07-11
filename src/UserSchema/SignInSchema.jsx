import * as yup from 'yup';


export const SignInSchema = yup.object({
    name: yup.string().min(6).max(22).required("Please Enter Your Name"),
    email:yup.string().email().required("Please Enter a Valid Email ID"),
    password:yup.string().min(8).required("Enter Your Password")
})
  
