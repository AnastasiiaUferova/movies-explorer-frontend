import React from "react";
import './App.css';
import '../../index.css'
import { Route, useHistory, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="root">
        <Header />
          <Main />


    
    </div>
  );
}

export default App;
