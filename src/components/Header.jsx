import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
const Header = () =>{

  let btnName = "Login";//Local variables cannot used to change the state of Data
  const [btnNameReact, setbtnNameReact] = useState("Login");
    return(
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Cart</li>
          <button onClick={()=>{
            btnNameReact === "Login"?
            setbtnNameReact("Logout"):setbtnNameReact("Login");
          }} className = "login">{btnNameReact}</button>
        </ul>
      </div>
    </div>
    )
  }
  export default Header;