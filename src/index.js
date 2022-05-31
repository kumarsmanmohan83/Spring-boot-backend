
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login'
import New_Category from './components/new_category';
import New_Expense from './components/new_expense';
import Register from './components/register';
import GetExpenseList from "./components/GetExpenseList";
import GetCategoryList from "./components/GetCategoryList";

function Index() {
  return (

    <BrowserRouter>
      <Routes>

        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="newexpense" element={<New_Expense />} />
        <Route path="newcategory" element={<New_Category />} />
        <Route path="expense" element={<GetExpenseList />} />
        <Route path="category" element={<GetCategoryList />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
