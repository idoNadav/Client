import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import '../Navbar/Navbar.css'
import './Button';
import Particles from "../../Particles";

class Navbar extends Component {

    state={
     clicked:false,
     isLogged:false
    }

    componentDidMount() {
        if(localStorage.getItem('user') === null){
            this.setState({'isLogged':false})
        }else{
            this.setState({'isLogged':true})
        }
    }

    handleClick =() =>{
        this.setState({clicked:!this.state.clicked});
    };


    removeToken = ()=>{
        if(this.state.isLogged) {
            localStorage.removeItem('user');
        }
    }

    render() {

        if(this.state.isLogged){
            return (

                <nav className="NavbarItems" >
                    {/*  <meta name="viewport" content="width=device-width , initial-scale=1.0">*/}
                    <h1 className="NavbarLogo">Project</h1>

                    <div className="menuIcon" onClick={this.handleClick}>

                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>

                    </div>

                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}> <i className={ 'fa fa-'+item.icon}> </i>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <a href='/' className="button" onClick={this.removeToken}><i className= "fa fa-user"> </i>Logout</a>
                </nav>
            )
        }else{
            return (
                <nav className="NavbarItems">
                    {/*  <meta name="viewport" content="width=device-width , initial-scale=1.0">*/}
                    <h1 className="NavbarLogo">Project</h1>

                    <div className="menuIcon" onClick={this.handleClick}>

                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}> <i className={ 'fa fa-'+item.icon}> </i>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                    <a href='/Login' className="button"><i className= "fa fa-user"> </i>LogIn</a>
                </nav>

            )
        }


    }
}

export default Navbar;