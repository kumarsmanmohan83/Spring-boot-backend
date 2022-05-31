import React, { Component } from 'react';
//import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import CatService from '../services/CatService';
import './exp.css'

class GetCategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
    }
    componentDidMount(){
        CatService.getUserCat().then((res)=> {
            this.setState({ users: res.data});
        });
    }
    render() {
        return (
            <div>
               
             <div className='container text-center'>
		        
                


                 <h2 className="text-center">My Category List</h2>
                 
                  <br></br>
                  <div className = "row">
                         <table className = "table table-striped table-bordered">

                             <thead>
                                 <tr>
                                     <th> Category Id</th>
                                     <th> Category Name</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     this.state.users.map(
                                         user => 
                                         <tr key = {user.id}>
                                              <td> {user.category_id}</td>
                                              <td> { user.category_name} </td> 
                                             
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

export default GetCategoryList;