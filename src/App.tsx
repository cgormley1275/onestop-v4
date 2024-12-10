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
import ProtectedRoute from './SignIn/ProtectedRoute.tsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin/" element={<SignIn />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/search/:query" element={<ProtectedRoute><SearchBarResults /></ProtectedRoute>} />
          <Route path="/search/" element={<ProtectedRoute><Search /></ProtectedRoute>} />
          <Route path="/details/:airportCode" element={<SearchDetails />} />
          <Route path="/profile/" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/profile/:username" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/createPost/" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
