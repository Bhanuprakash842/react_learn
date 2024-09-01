import User from "./User";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component
{
    constructor(props)
    {
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent Component Did Mount")
    }
    render(){
        // console.log("Parent Render");
    return(
        <div>
            <h1>About</h1>
            <h2>This is React series</h2>
            {/* <User name={"BhanuPrakash (Function)"} location={"Hyd (Function)"}/> */}

            <Userclass name={"BhanuPrakash (Class)"} location={"Hyd (Class)"}/>
        {/*<Userclass name={"ElonMusk"} location={"US"}/>
        <Userclass name={"Tata"} location={"Mum"}/> */}
        </div>
    )
}
}
export default About;