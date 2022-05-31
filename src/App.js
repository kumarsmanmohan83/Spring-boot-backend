import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-h1'>Welcome to Wealth Management Application</h1>
        <h1>Welcome</h1>
        <Layout />
      </header>
    </div>
  );
}

export default App;
