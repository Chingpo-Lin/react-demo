// create outer component
import React,{Component} from "react";
import Hello from './components/Hello'
import Welcome from "./components/Welcome";

export default class App extends Component {
    render() {
        return (
            <div>
               <Hello/>
               <Welcome/>
            </div>
        )
    }
}

// export app component and can be found