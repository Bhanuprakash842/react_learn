/*
   <div id = "parent">
   <div id = "child">
   <h1>I am a h1 tag</h1>
   <h2>I am a h2 tag</h2>
   </div>
   </div>
   ReactElement(Object)  -> HTML(Browser Understands)
 */
import React, { createElement } from "react";
import ReactDOM from "react-dom/client"
// const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" },[ React.createElement("h1", {}, "This is react"),React.createElement("h2", {}, "I am an h2 tag")]),React.createElement("div", { id: "child2" },[ React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")])]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);//ReactElement -> Object
/////JSX
//compared to the above react code ,the html code is easy so here this problem is solved by the JSX
//We are no longer using this React.createElement
//the above is the core react

//React Element
// const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// const heading = (
// <h1 id="heading" className="head" tabIndex="2">
//   Namaste React using jsx
//   </h1>
// );

//React Functional Component
// const HeadingComponent = () => (
//   <h1>
//   Namaste React Functional Component
//   </h1>
//   );
//Here the above code and below code are same
// const HeadingComponent = () =>{
//   return <h1>Namaste React Functional Component</h1>
// };

// const Title = () =>(
//   <h1 className = "head" tabIndex = "5">
//     Namaste React using JSX
//   </h1>
// ); 

// const elem = <span>React Element</span>

// const title2 = (

//   <h1>Hello {elem}</h1>
// );

// const number = 10;
// const HeadingComponent2 = () =>(
//   <div id="container">
//    <h2>{console.log("React") /*We can also do console.log*/}</h2>
//    {title2}
//    <h1 className="heading">Namaste React Functional Component {number*10}  </h1>
//   </div>
// );
//JSX will  prevent cross side scripting attacks


const Header = () =>{
  return(
  <div className="header">
    <div className="logo">
      <img src="https://r2.erweima.ai/imgcompressed/compressed_902b2a6fb7518806d26a12365002e288.webp" alt="Image not found"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
}

// const styleCard = {
//   backgroundColor : "#f0f0f0",
// };
const RestaurantCard = (props) =>{
  const {resData} = props;
  const {name,cuisines,avgRating,costForTwo} = resData;
  return(
    <div className="res-card" style={{
       backgroundColor : "#f0f0f0",
      }}>
      <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/djsvtouxx5oulwewos6v"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} FOR TWO</h4>
    </div>
  );
};

const resObj = {
  type:"restaurant",
  data:{
    name:"KFC",
    cuisines: ["Burgers","Biryani","American","Snacks","Fast Food"],
    costForTwo:40000,
    deliveryTime: 36,
    avgRating:3.8,
  }
}


const resList = {
    type: "restaurant",
    data: [
      {
        name: "Bharawan Da Dhaba",
        cuisines: ["Indian"],
        costForTwo: "₹ 300",
        avgRating: "4.5",
      },
      {
        name: "shere punjab veg",
        cuisines: ["North Indian"],
        costForTwo: "₹ 150",
        avgRating: "4.1",
      },
      {
        name: "Sethi Milk Badam",
        cuisines: ["Sweets", "Desserts"],
        costForTwo: "₹ 100",
        avgRating: "4.3",
      },
      {
        name: "Jodhpuri Kachori",
        cuisines: ["Snacks"],
        costForTwo: "₹ 100",
        avgRating: "3.9",
      },
      {
        name: "Hinglaj Kachori Bhandhar",
        cuisines: ["Snacks", "Chaat"],
        costForTwo: "₹ 100",
        avgRating: "4.2",
      },
      {
        name: "Tandoori Nights",
        cuisines: ["Tandoor"],
        costForTwo: "₹ 300",
        avgRating: "3.8",
      },
      {
        name: "yummy hub",
        cuisines: ["Indian"],
        costForTwo: "₹ 200",
        avgRating: "4.0",
      },
      {
        name: "wah ji waah veg and non veg corner",
        cuisines: ["North Indian", "Chinese"],
        costForTwo: "₹ 200",
        avgRating: "3.7",
      },
      {
        name: "theka coffee desi",
        cuisines: ["Beverages"],
        costForTwo: "₹ 100",
        avgRating: "4.0",
      },
      {
        name: "Sam Uncle",
        cuisines: ["Continental"],
        costForTwo: "₹ 200",
        avgRating: "3.6",
      },
      {
        name: "Singh Hut",
        cuisines: ["Fast Food", "Indian"],
        costForTwo: "₹ 250",
        avgRating: "3.8",
      },
      {
        name: "Shri Balaji Vaishno Dhaba",
        cuisines: ["North Indian"],
        costForTwo: "₹ 100",
        avgRating: "3.9",
      },
      {
        name: "Swastik Dhaba",
        cuisines: ["North Indian"],
        costForTwo: "₹ 200",
        avgRating: "3.7",
      },
      {
        name: "Roll Express",
        cuisines: ["Fast Food"],
        costForTwo: "₹ 200",
        avgRating: "4.1",
      },
      {
        name: "CHAWLA SAAB THE JUICE MASTER",
        cuisines: ["Juices", "Beverages"],
        costForTwo: "₹ 300",
        avgRating: "4.2",
      }
    ]
  }
  

const Body = () =>{
  return (
    <div className="body">
    <div className="Search">search</div>
    <div className="res-container">
        
         { resList.data.map((restaurant)=>(
          <RestaurantCard key={resList.data.id} resData = {restaurant}/>
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

const AppLayout = () =>{
  return (<div className="app">
    <Header/>
    <Body/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

