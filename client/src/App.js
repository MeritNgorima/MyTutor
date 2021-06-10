import './App.css';
import React, { useState,useEffect } from 'react';
import {Typography,AppBar,Card,CardMedia,CssBaseline,Container,CardActions,Grid,Toolbar,CardContent} from '@material-ui/core';
import Header from './components/LearnerHomePage/Header';
import Sidebar from './components/LearnerHomePage/Sidebar';


function App() {

  useEffect(() =>{

  },[])


  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
