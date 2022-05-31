
import React, { useState,useEffect} from "react";
import ReactDOM from "react-dom";

import "./common.css";
import GetExpenseList from "./GetExpenseList";
import "./login.css"

function Login() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];
        console.log(document.forms[0].uname.value);
        const userData = students.find((user) => user.email_id === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const renderForm = (
        // <div className="form">
        //     <form onSubmit={handleSubmit}>
        //         <div className="input-container">
        //             <label><h3>Username :-
        //                 <input type="text" name="uname" placeholder="Enter the user name" required /></h3></label>

        //             {renderErrorMessage("uname")}
        //             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Password :-
        //                 <input type="password" name="pass" placeholder="Enter the password" required /></h3></label>
        //             {renderErrorMessage("pass")}
        //         </div>
        //         <div class="input-container">
        //             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        //             <label class="form-check-label" for="exampleCheck1">Check me out</label>
        //         </div>
        //         <div className="button-container">
        //             <input type="submit" />
        //         </div>
        //     </form>
        // </div>

        <div className="container"> 
            <div className="row"> 
                <div className="col-md-6"> 
                    <div className="card"> 
                        <form onSubmit={handleSubmit} className="box"> <h1>Log in</h1> 
                        <p className="text-muted"> Please enter your login and password!</p>

                        <input type="text" name="uname" placeholder="Username"/>
                        {renderErrorMessage("uname")}
                    

                        <input type="password" name="pass" placeholder="Password"/> 
                        {renderErrorMessage("pass")}

                        <a className="forgot text-muted" href="#">Forgot password?</a>
                        <input type="submit"  value="Login" /> 

                        <h5 style={{color:"white"}}>Don't have an account? 
                            <a href="/register"> Sign Up</a>
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
                {/* <div className="title"><h2>Sign In</h2></div> */}
                {isSubmitted ? <div className="center"><h2>Hi {document.forms[0].uname.value}</h2>
                    
                    <GetExpenseList />
                </div> : renderForm}
            </div>
        </div>
    );
}
export default Login;