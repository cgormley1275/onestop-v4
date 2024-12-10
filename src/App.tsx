import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/index.tsx";
import SignIn from './SignIn/index.tsx';
import SignUp from './SignUp/index.tsx';
import Search from './Search/index.tsx';
import Profile from './Profile/index.tsx';
import SearchDetails from './Search/Details/index.tsx';
import SearchBarResults from './Search/SearchBarResults/index.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';
import CreatePost from './CreatePost/index.tsx';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin/" element={<SignIn />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/search/:query" element={<SearchBarResults />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/details/:airportCode" element={<SearchDetails />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/createPost/" element={<CreatePost />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
