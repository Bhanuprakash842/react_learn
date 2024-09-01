import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
const fetchMenu  = async() =>{
    const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantid=425&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
}
    return (resInfo === null) ? <Shimmer/> : (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;