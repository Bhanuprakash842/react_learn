import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo} = resData;
    return(
      <div className="res-card" style={{
         backgroundColor : "#f0f0f0",
        }}>
        <img alt="res-logo" className="res-logo" src={CDN_URL}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo} FOR TWO</h4>
      </div>
    );
  };

  export default RestaurantCard;