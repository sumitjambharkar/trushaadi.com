import './App.css';
import React, { useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Signup from './componets/Signup';
import Login from './componets/Login';
import CoupleDetails from './componets/CoupleDetails';
import Video from './componets/Video';
import Tellus from './componets/Tellus';
import Profile from './componets/Profile';
import Steptwo from './componets/Steptwo';
import Topmatch from './componets/Topmatch';
import About from './componets/About';
import Home from './componets/Home'
import HomeSection from './componets/HomeSection';
import View from './componets/View';
import { useDispatch, useSelector} from 'react-redux';
import {selectUser,login,logout} from './componets/userSlice';
import { auth } from './componets/firebase';
import Contact from './componets/Contact';
import Policy from './componets/Policy';
import Sitemap from './componets/Sitemap';
import SendEmail from './componets/SendEmail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './componets/ScrollToTop';
import MyProfile from './componets/MyProfile';
import Email from './componets/setting/Email';
import Delete from './componets/setting/Delete'
import Contacts from './componets/setting/Contacts';
import Policys from './componets/setting/Policys';
import Account from './componets/setting/Account'
import Chats from './componets/Chats';
import BuySub from './componets/BuySub';
import PayHome from './componets/PayHome';
import Chat from './componets/chat/Chat';





function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
        email:userAuth.email,
        name :userAuth.name,
        password: userAuth.password
        }))
      }else{
        dispatch(logout())
      }
    })
    
  }, [])
  
  return (
    <>
    <Router>
      <ScrollToTop/>
    <ToastContainer theme="colored" position="top-right"/>
    <Switch>
         {!user ?
        <Route exact path="/">
          <Home/>
        </Route> :
        <>
        {user.email === "xyz@gmail.com" || user.email === "kachara@gmail.com" || user.email === "ssjambharkar@gmail.com" ? <Route exact path="/"><HomeSection/></Route> :<Route exact path="/"><PayHome/></Route> }
        <Route exact path="/view/:Id">
        <View/>
      </Route>
      <Route exact path="/view/:Id/buy">
        <BuySub/>
      </Route>
      <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/privacy-policy">
            <Policy/>
          </Route>
          <Route exact path="/sitemap">
            <Sitemap/>
          </Route>
          <Route exact path="/profile/step/2">
            <Steptwo/>
          </Route>
          <Route exact path="/top-matches">
            <Topmatch/>
          </Route>
          <Route exact path="/my-profile">
            <MyProfile/>
          </Route>
          <Route exact path="/connect-match">
            <PayHome/>
          </Route>
          <Route exact path="/my-setting">
            <Email/>
          </Route>
          <Route exact path="/my-policys">
            <Policys/>
          </Route>
          <Route exact path="/my-account">
            <Account/>
          </Route>
          <Route exact path="/my-contacts">
            <Contacts/>
          </Route>
          <Route exact path="/delete">
            <Delete/>
          </Route>
      <Route exact path="/chats/:roomId">
        <Chats/>
      </Route>
      <Route exact path="/new-chat">
        <Chat/>
      </Route>
         
        </>
         }
        
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/couple/:personId">
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
          <Route exact path="/top-matches">
            <Topmatch/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/privacy-policy">
            <Policy/>
          </Route>
          <Route exact path="/sitemap">
            <Sitemap/>
          </Route>
          <Route exact path="/forgot-password">
            <SendEmail/>
          </Route>
          
        </Switch>
    </Router>
    </>
  );
}

export default App;
