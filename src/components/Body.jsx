import RestaurantCard from "./RestaurantCard";
import React, { useState } from "react";
//We should not put the hard coded data in our components files
import resList from "../utils/mockData";

const Body = () =>{
    const arr = useState(resList);
    const [listOfRestaurants,setListOfRestaurants] = arr;
    return (
      <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=> res.avgRating > 4);
            setListOfRestaurants(filteredList);
        }}>
            Top Rated Restaurants
            </button>
            </div>
      <div className="res-container">
          
           { listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={resList.id} resData = {restaurant}/>
            ))} 
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