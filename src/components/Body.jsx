import RestaurantCard from "./RestaurantCard";
import React, { useState , useEffect} from "react";
//We should not put the hard coded data in our components files
import resList from "../utils/mockData";
import Shimmer from "../components/Shimmer";
const Body = () =>{
    const arr = useState([]);
    const [listOfRestaurants,setListOfRestaurants] = arr;
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    // useEffect(()=>{
    //   console.log("Use Effect")
    // },[]);//this will printed after rendering is completed 
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
      //We cannot access directly due to the cors so we need to install the Allow CORS Extension
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //This is not the good way to have the data
      //Here comes the topic Optional Chaining
    }

    // console.log("rendered");//it will be printed First


    //This is called a Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //   return (
    //     <Shimmer/>
    //   )
    // }


    //Using the spinner is not a good practice instead of spinner nowadays the shimmer UI is used.
    //Shimmer UI is modern approach in which we will return fake UI of same layout of our webpage


    return listOfRestaurants.length === 0 ? <Shimmer/> : (
      <div className="body">
      <div className="filter">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
          //We use this because without this input is not taken in text box so we have to update the value if there is any change in the value
          //When we are updating the value it will render each time how many times the value changes .
          //But the rendering will be very fast that we cannot notice the changes in UI
        }}/>
        <button onClick={()=>{
          //Filter the restaurant cards and update the UI
          //searchText
          console.log(searchText);

          const filteredRestaurant = listOfRestaurants.filter((res)=> 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListOfRestaurants(filteredRestaurant);
        }}>Search</button>
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5);
            setListOfRestaurants(filteredList);
        }}>
            Top Rated Restaurants
            </button>
            </div>
      <div className="res-container">
          
      {Array.isArray(listOfRestaurants) && listOfRestaurants.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
           {/*
            If we use index as key
            { resList.data.map((restaurant,index)=>(
            <RestaurantCard key={index} resData = {restaurant}/>
            ))}  */}
  
          {/* <RestaurantCard
           resData = {resList.data[0]}
           />
           <RestaurantCard
           resData = {resList.data[1]}
           />
           <RestaurantCard
           resData = {resList.data[2]}
           />
           <RestaurantCard
           resData = {resList.data[3]}
           />
           <RestaurantCard
           resData = {resList.data[4]}
           /> */}
           {/* <RestaurantCard resData = {resList.data[5]} />
           <RestaurantCard resData = {resList.data[6]}/>
           <RestaurantCard resData = {resList.data[7]}/>
           <RestaurantCard resData = {resList.data[8]}/>
           <RestaurantCard resData = {resList.data[9]}/>
           <RestaurantCard resData = {resList.data[10]}/> */}
  
      </div>
      </div>
    )
  }

  export default Body;