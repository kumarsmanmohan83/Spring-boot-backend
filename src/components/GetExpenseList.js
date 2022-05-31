import React, { Component } from 'react';
//import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';
import './exp.css'

class GetExpenseList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
    }
    componentDidMount(){
        UserService.getUser().then((res)=> {
            this.setState({ users: res.data});
        });
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
             <h1>Welcome , Manmohan Kumar !</h1>
             <a href='/'><button className='btn btn-danger'>Sign Out</button></a>
             <a href="/newexpense"><h3>Click to Add New Expense</h3></a>
             <a href="/newcategory"><h3>Click to Add New Category</h3></a>   
             <div className='container text-center'>
		        
                


                 <h2 className="text-center">My Expenses</h2>
                 
                  <br></br>
                  <div className = "row">
                         <table className = "table table-striped table-bordered">

                             <thead>
                                 <tr>
                                     <th> Expense Id</th>
                                     <th> Date</th>
                                     <th> Desciption</th>
                                     <th> Location</th>
                                     <th> Category Id</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     this.state.users.map(
                                         user => 
                                         <tr key = {user.id}>
                                              <td> {user.expense_id}</td>
                                              <td> { user.expense_date} </td>   
                                              <td> {user.description}</td>
                                              <td> {user.location}</td>
                                              <td> {user.category_id}</td>
                                             
                                         </tr>
                                     )
                                 }
                             </tbody>
                         </table>

                  </div>
	            




		        
	         </div>
             </div>

     //        <div class="container mt-5">

    //             <div class="row">

    //                <div class="col-md-8 mx-auto">

    //                 <table class="table bg-white rounded border table-hover table-dark">
    //                  <thead>
    //                     <tr>
    //                       <th scope="col">Expense Id</th>
    //                       <th scope="col">Expense Date</th>
    //                       <th scope="col">Desciption</th>
    //                       <th scope="col">Location</th>
    //                       <th scope="col">Category Id</th>
    //                    </tr>
    //                 </thead>

    //                 <tbody>
    //                 {
    //                                  this.state.users.map(
    //                                   user => 
    //                                    <tr key = {user.expense_id}>
    //                                         <td> { user.expense_date} </td>   
    //                                         <td> {user.description}</td>
    //                                         <td> {user.location}</td>
    //                                         <td> {user.category_id}</td>
                                             
    //                                    </tr>
    //                                )
    //                            }
    //                </tbody>
                  
    //          </table>
            
    //       </div>
          
    //     </div>
        

    //   </div>
        );
    }
}

export default GetExpenseList;