import React, {Component} from 'react';
import './Sign_up.css';
import axios from 'axios'


class Sign_up extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword:'',
            errorMessage:''
        };
    }

    postData = (event) => {
        event.preventDefault();
        const password = this.state.password;
        if(password !== this.state.confirmPassword ){
            alert('The password and confirmation password do not match');
            return;
        }
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const phoneNumber = this.state.phoneNumber;
        const data = {firstName,lastName , email, phoneNumber, password};
        console.log(data)
        axios.post('/users/register', data)
            .then(res => {
                console.log(res.data);
                alert("Added successfully !");
                /*document.getElementById("sign_up_form").reset();   //Reset the form after submit*/
                window.location.replace("/Login");
            }).catch(error => {
            console.log(error);
            alert(error.response.data.message)
        })
    };

    changeData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
         <div className="bg-img" onSubmit={this.postData}>
             <div className="details">
                 <header className="form_title">Sign up</header>
                 <form className="log_in_form" id="log_in_form">
                     <div className="field">
                         <span className="fa fa-user"/>
                         <input type="text" name='firstName' placeholder="First Name" onChange={this.changeData} required/>
                     </div>
                     <div className="field space">
                         <span className="fa fa-user"/>
                         <input type="text" name='lastName' className="pass-key" id="password"
                                placeholder="Last Name"
                                onChange={this.changeData} required/>
                     </div>
                     <div className="field space">
                         <span className="fa fa-envelope"/>
                         <input type="email" name='email' className="pass-key" id="password"
                                placeholder="Email"
                                onChange={this.changeData} required/>
                     </div>
                     <div className="field space">
                         <span className="fa fa-lock"/>
                         <input type="password" name='password' className="pass-key" id="password" minLength="8"
                                placeholder="Password"
                                onChange={this.changeData} required/>
                     </div>
                     <div className="field space">
                         <span className="fa fa-exclamation-triangle"/>
                         <input type="password" name='confirmPassword' className="pass-key" id="password" minLength="8"
                                placeholder="Confirm Password"
                                onChange={this.changeData} required/>
                     </div>

                     <div className="field space">
                         <span className="fa fa-phone"/>
                         <input type="text" name='phoneNumber' className="phone" minLength="10" maxLength="10"
                                placeholder="Phone Number"
                                onChange={this.changeData} required/>
                     </div>
                     <br/>
                     <br/>
                     <div className="field">
                         <input type="submit" value="SIGN UP"/>
                     </div>
                     <div className='signup' value="SIGN UP">
                         <br/>
                         <div className="pass2">
                             Already Registered? <a href="/Login"> log in</a>
                         </div>
                     </div>

                 </form>
             </div>

         </div>

        );
    }

}

export default Sign_up;

