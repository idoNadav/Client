
import './App.css';
import React from "react";
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Sign_up from './Components/Pages/Sign_up';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Pages/Login";
import Particles from './Particles';
import Home from "./Components/Pages/Home";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import ResetPassword from "./Components/Pages/ResetPassword";


let axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = 'http://localhost:8080' ;


class App extends React.Component {


    render() {
        return (
            <Router>
            <div >

                <Navbar/>
                       <Route exact path='/Sign_up' component={Sign_up} />
                       <Route exact path='/Login' component={Login} />
                       <Route exact path='/Home' component={Home} />
                       <Route exact path='/Forgot_password' component={ForgotPassword} />
                       <Route exact path='/Reset_password/:id' component={ResetPassword} />
                <Particles />
                {/*<Particles id="particles-js" params={data} />*/}
            </div>

            </Router>

        );
    }

}
export default App;
