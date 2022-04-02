import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from './componets/Signup';
import Login from './componets/Login';
import Home from './componets/Home';
import CoupleDetails from './componets/CoupleDetails';
import Video from './componets/Video';
import Tellus from './componets/Tellus';
import Profile from './componets/Profile';
import Steptwo from './componets/Steptwo';
import Topmatch from './componets/Topmatch';
import About from './componets/About';
import HomeSection from './componets/HomeSection';


function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/couple">
            <CoupleDetails/>
          </Route>
          <Route exact path="/video">
            <Video/>
          </Route>
          <Route exact path="/tellus">
            <Tellus/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/profile/step/2">
            <Steptwo/>
          </Route>
          <Route exact path="/top-matches">
            <Topmatch/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/home/dashbord">
            <HomeSection/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
