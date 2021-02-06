import React, {Component} from 'react';
import './Login.css';
import axios from 'axios'
import Googlelogin from "react-google-login";



class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    postData = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const data = {email, password};

        axios.post('/users/logIn', data)
            .then(res => {
                if (res.data.status === false) {
                    alert('Password is incorrect');
                    console.log('Password is incorrect');
                    const passwordField = document.querySelector("#password");
                    passwordField.value = "";
                    passwordField.focus();
                } else {
                    localStorage.setItem('user', res.data.token);
                    console.log(res.data);
                    document.getElementById("log_in_form").reset();
                    window.location.replace("/Sign_up");
                }
            }).catch(error => {
            console.log(error.response.data.error);
            alert(error.response.data.error);
            document.getElementById("log_in_form").reset();
        })
    };

    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })

    };

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.email);
        const email = response.profileObj.email;
        axios.get('/users/userByEmail/' + email).then(res => {
            console.log(res.data);
            localStorage.setItem('user', res.data.token);
            window.location.replace("/");
        }).catch(error => {
            console.log(error.response.data);
            alert(error.response.data);
        })
    }

    render() {

        return (
            <div className="bg-img" onSubmit={this.postData}>
            <div className="content">
                <header>Login</header>
                <form className="log_in_form" id="log_in_form">
                    <div className="field">
                        <span className="fa fa-user"/>
                        <input type="email" name='email' placeholder="Email" onChange={this.changeData} required/>
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"/>
                        <input type="password" name='password' className="pass-key" id="password"
                               placeholder="Password"
                               onChange={this.changeData} required/>
                    </div>
                    <div className="pass">
                        <a href="/Forgot_password">Forgot Password?</a>
                    </div>
                    <div className="field">
                        <input type="submit" value="LOGIN"/>
                    </div>
                    <div className='login' value="LOGIN">

                        <div className='google'>
                            <div className='login-google'>-OR-</div>
                            <br/>
                            <Googlelogin
                                theme='dark'
                                clientId='827335749398-g12fd8p9suobcl887parlivmj90hrtns.apps.googleusercontent.com'
                                buttonText='Sign in with Google'
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <br/>
                        <div className="pass2">
                            Dont have an account? <a href="/Sign_up">Sign up</a>
                        </div>
                    </div>

                </form>
            </div>

        </div>
        );
    }

}

export default Login;
