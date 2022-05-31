import React from "react";
//import { Nav, NavLink, NavMenu } from "./NavbarElements";
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = () => {
    return (
        <div className="App">
            <header>
                <br/>
                <br/>
                <div style={{marginTop:"80px"}}>
                <button className="btn btn-primary"><a href="/login"><h3 style={{color:"purple"}}>Login</h3></a>
                    </button>
                    </div>
                <br/>
                <br/>
                <div style={{marginTop:"35px"}}>
                <button className="btn btn-primary"><a href="/register" ><h3  style={{color:"purple"}}>Register</h3></a></button>
                </div>
            </header>
        </div>

    );
};

export default Layout;
