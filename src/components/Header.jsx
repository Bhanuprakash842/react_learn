import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  let btnName = "Login"; //Local variables cannot used to change the state of Data
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("Header render");

  const onlineStatus = useOnlineStatus();

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty =[] => useEffect will be called on initial render(just once)
  //if dependency array is [btNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{onlineStatus?"True":"False"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
            className="login"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
