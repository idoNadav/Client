import React, {Component} from 'react';
import './ForgotPassword.css';
import axios from 'axios';




class ForgotPassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    };

    postData = (event) => {
        event.preventDefault();
        const email = this.state.email;
        axios.get('users/forgot-password/'+email).then(res=>{
            alert('Email has been sent to' + " " + res.data + "," +" "+ "please activate your account")
            console.log('Email has been sent to' + " " + res.data)
            document.getElementById("email_form").reset();
            }
        ).catch(error =>{
            console.log(error.response.data);
            alert(error.response.data);
            document.getElementById("email_form").reset();
        })
    };


    render(){
      return(
          <div className="background" onSubmit={this.postData}>
            <div className="frame">
                <header>Forgot Password </header>
                <form className="forgot_form" id="email_form">

                    <div className="field">
                        <span className="fa fa-envelope"/>
                        <input type="email" name='email' placeholder="Email"  onChange={this.changeData} required/>
                    </div>
                    <br/>
                    <br/>
                    <button className="submit_btn">  <span className="fa fa-paper-plane"/> Send</button>

                </form>
            </div>
          </div>

      );
  }






}

export default ForgotPassword;
