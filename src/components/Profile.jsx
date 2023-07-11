import { MyContext } from "../MyContext";
import { useContext } from "react";
import Navigation2 from "./Navigation2";

const Profile = () => {
  const{account} = useContext(MyContext);
  console.log("account",account);
  return (
    <>
    <Navigation2/>
    <div className="pro-main-cont">
      <h1>
        User Profile
      </h1>

    <h3 className="pro-name"><b>Name:</b>{account.name}</h3>
    <h3 className="pro-email"><b>Email:</b>{account.email}</h3>
    <h3 className="pro-password"><b>password:</b>{account.password}</h3>
    </div>
    </>
  )
}

export default Profile