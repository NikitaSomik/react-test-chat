import React, {Component} from 'react';
import './App.css';
// import Header from './Header';
// import Technologies from './Technologies';
// import Footer from './Footer';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

// Чтобы использовать Route, то нужно обернуть в тэг BrowserRouter (import {BrowserRouter, Route} from "react-router-dom")

const App = (props) => {
  // props.updateNewPostText('text');
    return (
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs'
              render={ () => <Dialogs state={props.state.dialogsPage} /> } />
            <Route path='/profile'
              render={ () => <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} /> } />
          </div>
        </div>
    )
};


export default App;
