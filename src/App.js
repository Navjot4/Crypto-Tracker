import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import Header from './Components/Header';
const useStyles=makeStyles(()=>({
  App:{
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }
}));
function App() {
  const classes=useStyles();
  return (
    <div className={classes.App}>
       <BrowserRouter>
       <Header></Header>
       <Routes>
         <Route path="/" element={<Homepage/>} exact ></Route>
         <Route path="/coins/:id" element={ <CoinPage/>} exact></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
