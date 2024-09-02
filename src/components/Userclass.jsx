import React,{useState} from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
            login : "default",
            location : "default",
            }
        };
        // console.log(this.props.name+"Child Constructor");
    }

    async componentDidMount(){
        // console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/Bhanuprakash842");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        });

        }
    
        componentDidUpdate(){
            // console.log("Component Updated");
        }

        componentWillUnmount(){
            // console.log("Component Will Unmount");
        }

    render(){
        const {login,location,avatar_url} = this.state.userInfo;//Destructuring
        // const {count} = this.state;
        // console.log(this.props.name+"Child Render")
        return (
            <div className = "user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                        // count2:this.state.count2 + 1
                    })
                }}>Count Increase</button> */}
                <img src={avatar_url }alt="Img not available" />
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @bhanuprakash</h4>
            </div>
        )
    }
}

export default Userclass;