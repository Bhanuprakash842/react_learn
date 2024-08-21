/*
   <div id = "parent">
   <div id = "child">
   <h1>I am a h1 tag</h1>
   <h2>I am a h2 tag</h2>
   </div>
   </div>
   ReactElement(Object)  -> HTML(Browser Understands)
 */
import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" },[ React.createElement("h1", {}, "This is react"),React.createElement("h2", {}, "I am an h2 tag")]),React.createElement("div", { id: "child2" },[ React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);//ReactElement -> Object
/////JSX
//compared to the above react code ,the html code is easy so here this problem is solved by the JSX
//We are no longer using this React.createElement
//the above is the core react