import React from 'react';
import './App.css';
import NavBar from "./components/nav/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Facts from "./pages/facts/Facts";
// import Support from "./pages/Support";
import PlanYourTrip from './pages/planYourTrip/PlanYourTrip';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>}></Route>
        <Route path="/facts" element={<><NavBar/><Facts /> </>}></Route>
        <Route path="/planYourTrip" element={<><NavBar/><PlanYourTrip /> </>}></Route>
      </Routes>
    </Router>
  );



  
};

export default App;
