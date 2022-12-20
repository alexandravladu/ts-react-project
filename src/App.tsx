import React, {FC, ChangeEvent, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';

import Todo from './components/Todo';
import NavBar from "./components/nav/NavBar";
import Home from "./pages/Home";
import {ITask} from './Interfaces'



const App: FC = () => {

  return(
    <>
        <Router>
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>}></Route>
        {/* <Route path="/facts" element={<><NavBar/><Facts /> </>}></Route> */}
        {/* <Route path="/support" element={<><NavBar/><Support /> </>}></Route> */}
      </Routes>
    </Router>

    <Todo />
    </>
  )
}

export default App;
