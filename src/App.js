import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import './App.css';
import Header from './header';
import Employee from './view/employee';
import Bussiness from './view/bussiness';

function App() {
 
  return (
           <HashRouter>
		         <Header/>
             <Employee/>
             <Route exact path="/bussiness" component={Bussiness}/>
    
		   </HashRouter>
  ); 
}

export default App;
