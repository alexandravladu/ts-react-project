import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/sideStyling';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import {  ToDo } from './pages/toDo';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/overview" element={<ToDo/>} ></Route>
                
            </Routes>
        </Router>
    );
};

export default App;