import React, { useState } from "react";
//import ReactDOM from "react-dom";

import "./login.css"
import GetExpenseList from "./GetExpenseList";
import './common.css'

function New_Expense() {
    const [expense_id, setExp_id] = useState('')
    const [expense_date, setExp_date] = useState('')
    const [description, setDes] = useState('')
    const [location, setLoc] = useState('')
    const [category_id, setCat_id] = useState('')
    //const [students, setStudents] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        const student = { expense_id, expense_date, description, location, category_id }
        console.log(student)
        fetch("http://localhost:8080/Expense_Dtls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)

        }).then(() => {

            setIsSubmitted(true);
        })
    }



    const renderForm = (
        // <div className="form">
        //     <form >
        //         <div className="input-container">
        //             <label><h3>Expense ID :-
        //                 <input type="number" name="ex_id" placeholder="Enter the Expense ID" value={expense_id}
        //                     onChange={(e) => setExp_id(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Expense Date :-
        //                 <input type="date" name="ex_date" placeholder="Enter the Expense Date" value={expense_date}
        //                     onChange={(e) => setExp_date(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Description :-
        //                 <input type="text" name="desc" placeholder="Enter the Description" value={description}
        //                     onChange={(e) => setDes(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Location :-
        //                 <input type="text" name="loc" placeholder="Enter the Location" value={location}
        //                     onChange={(e) => setLoc(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Category :-
        //                 <input type="number" name="cat" placeholder="Enter the Category ID" value={category_id}
        //                     onChange={(e) => setCat_id(e.target.value)} required /></h3></label>
        //         </div>
        //         <button variant="contained" color="secondary" onClick={handleClick}>
        //             Submit
        //         </button>
        //     </form>
        // </div>


        <div className="container"> 
        <div className="row"> 
            <div className="col-md-6"> 
                <div className="card"> 
                    <form onSubmit={handleClick} className="box"> <h1>Create New Expense</h1> 
                    <p className="text-muted"> Please enter expense deatils</p> 

                    <input type="text" name="ex_id" placeholder="Expense ID" value={expense_id}
                       onChange={(e) => setExp_id(e.target.value)} required /> 

                    <input type="text" name="ex_date" placeholder="Expense Date" value={expense_date}
                        onChange={(e) => setExp_date(e.target.value)} required /> 

                    <input type="text" name="desc" placeholder="Description" value={description}
                        onChange={(e) => setDes(e.target.value)} required />
                    
                    <input type="text" name="loc" placeholder="Location" value={location}
                        onChange={(e) => setLoc(e.target.value)} required />

                    <input type="text" name="cat" placeholder="Category ID" value={category_id}
                       onChange={(e) => setCat_id(e.target.value)} required />

                    
                    <input type="submit"  value="Create"/> 
                      
                    <a href="/expense">Back to Main Menu</a>
                   
                    
                </form> 
            </div> 
        </div>
         </div>
    </div>
    );

    return (
        <div >
            <div >
                {/* <div className="title"><h2>Create New Expense</h2></div> */}
                {isSubmitted ? <div>
                    {alert('Expense created !')}
                    <GetExpenseList />
                </div> : renderForm}
            </div>
        </div>
    );
}
export default New_Expense;