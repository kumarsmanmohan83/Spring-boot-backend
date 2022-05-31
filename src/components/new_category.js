import React, { useState } from "react";

import "./common.css";
import GetExpenseList from "./GetExpenseList";

function New_Category() {

    const [category_id, setCat_id] = useState('')
    const [category_name, setcat_name] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        const student = { category_id, category_name }
        console.log(student)
        fetch("http://localhost:8080/Category_Dtls", {
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
        //             <label><h3>Category ID :-
        //                 <input type="text" name="cat_id" placeholder="Enter the Category ID" value={category_id}
        //                     onChange={(e) => setCat_id(e.target.value)} required /></h3></label>
        //         </div>
        //         <div className="input-container">
        //             <label><h3>Category Name :-
        //                 <input type="text" name="cat_name" placeholder="Enter the Category Name" value={category_name}
        //                     onChange={(e) => setcat_name(e.target.value)} required /></h3></label>
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
                    <form onSubmit={handleClick} className="box"> <h1>Create New Category</h1> 
                    <p className="text-muted"> Please enter category deatils</p> 

                    <input type="text" name="cat_id" placeholder="Category ID" value={category_id}
                       onChange={(e) => setCat_id(e.target.value)} required />

                   <input type="text" name="cat_name" placeholder="Category Name" value={category_name}
                         onChange={(e) => setcat_name(e.target.value)} required />


                    
                    <input type="submit"  value="Create"/> 
                     
                    <a href="/category">List of Categories</a><br/><br/>
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
                {/* <div className="title"><h2>Create New Category</h2></div> */}
                {isSubmitted ? <div>
                    {alert('Category created !')}
                    <GetExpenseList />
                </div> : renderForm}
            </div>
        </div>
    );
}
export default New_Category;