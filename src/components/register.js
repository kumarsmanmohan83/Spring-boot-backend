import React, { useState } from "react";

import "./common.css";
import "./login.css"

function Register() {

    const [email_id, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firtsname, setFirst_name] = useState('')
    const [lastname, setLast_name] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        const student = { email_id, password, firtsname, lastname }
        console.log(student)
        fetch("http://localhost:8080/Register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {
            setIsSubmitted(true);
        })
    }
    const renderForm = (
        // <div className="form">
        //     <form onSubmit={handleClick}>
        //         <div className="input-container">
        //             <label><h3>E- Mail :-
        //                 <input type="email" name="uname" placeholder="Enter your Email" value={email_id}
        //                     onChange={(e) => setEmail(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Password :-
        //                 <input type="password" name="pass" placeholder="Enter the Password" value={password}
        //                     onChange={(e) => setPassword(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>First Name :-
        //                 <input type="text" name="first_name" placeholder="Enter the First Name" value={firtsname}
        //                     onChange={(e) => setFirst_name(e.target.value)} required /></h3></label>
        //         </div >
        //         <div className="input-container">
        //             <label><h3>Last Name :-
        //                 <input type="text" name="last_name" placeholder="Enter the Last Name" value={lastname}
        //                     onChange={(e) => setLast_name(e.target.value)} required /></h3></label >
        //         </div >
        //         <div className="button-container">
        //             <input type="submit" />
        //         </div>
        //     </form >
        // </div >
  
        <div className="container"> 
        <div className="row"> 
            <div className="col-md-6"> 
                <div className="card"> 
                    <form onSubmit={handleClick} className="box"> <h1>Sign Up</h1> 
                    <p className="text-muted"> Please enter your deatils</p> 

                    <input type="text" name="uname" placeholder="Email Id"
                       value={email_id} onChange={(e) => setEmail(e.target.value)} required/> 

                    <input type="password" name="pass" placeholder="Password"
                       value={password} onChange={(e) => setPassword(e.target.value)} required/> 

                    <input type="text" name="first_name" placeholder="First Name"
                       value={firtsname} onChange={(e) => setFirst_name(e.target.value)} required /> 
                    
                    <input type="text" name="last_name" placeholder="Last Name"
                       value={lastname} onChange={(e) => setLast_name(e.target.value)} required /> 

                    <a className="forgot text-muted" href="#">Forgot password?</a>
                    <input type="submit"  value="Sign Up"/> 

                    <h5 style={{color:"white"}}>Have an account already? 
                            <a href="/login"> Log in</a>
                    </h5>

                    <div className="col-md-12"> 
                    <ul className="social-network social-circle">
                         <li><a href="#" className="icoFacebook" title="Facebook">
                             <i className="fab fa-facebook-f"></i></a>
                         </li>
                         <li>
                             <a href="#" className="icoTwitter" title="Twitter">
                             <i className="fab fa-twitter"></i></a>
                         </li> 
                         <li>
                             <a href="#" className="icoGoogle" title="Google +">
                             <i className="fab fa-google-plus"></i></a>
                         </li> 
                    </ul> 
                    </div> 
                </form> 
            </div> 
        </div>
         </div>
    </div>

    );

    return (
        <div >
            <div >
                {/* <div className="title"><h2>User Registration - Sign Up</h2></div> */}
                {isSubmitted ? <div className="app"><h2>You have Signed Up Successfully !</h2>
                    <a href='/login'><h3>Click here to Login</h3></a>
                </div> : renderForm}
            </div>
        </div>
    );
}
export default Register;