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
import Header from "./components/Header";//We can also use Header.jsx
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// const styleCard = {
//   backgroundColor : "#f0f0f0",
// };
import RestaurantCard from "./components/RestaurantCard";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
//can also write Body.jsx
const AppLayout = () =>{
  return (<div className="app">
    <Header/>
    <Outlet/>
  </div>)
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:
        <About/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      }
    ],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);

