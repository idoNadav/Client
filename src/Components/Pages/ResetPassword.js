import React, {Component} from 'react';
import './ForgotPassword.css';
import axios from 'axios';

class ResetPassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmPassword:'',
            token:this.props.match.params.id
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
        if(this.state.newPassword !== this.state.confirmPassword ){
            alert('The password and confirmation password do not match');
            document.getElementById("email_form").reset();
            return ;
        }
        const data={
            newPassword:this.state.newPassword,
            token:this.state.token
        }
        axios.put('/users/reset-password',data).then(res=>{
            alert('Your password has changed successfully !');
            console.log('password has changed successfully !')
            document.getElementById("email_form").reset();
            window.location.replace("/Login");
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
                    <header>Reset Your Password:</header>
                    <form className="forgot_form" id="email_form">

                        <div className="field">
                            <span className="fa fa-lock"/>
                            <input type="password" name='newPassword' placeholder="New Password" minLength="8"  onChange={this.changeData} required/>
                        </div>
                        <br/>
                        <br/>
                        <div className="field">
                            <span className="fa fa-exclamation-triangle"/>
                            <input type="password" name='confirmPassword' placeholder="Confirm Password"  minLength="8" onChange={this.changeData} required/>
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

export default ResetPassword;
