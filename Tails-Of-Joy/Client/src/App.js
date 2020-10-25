
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { ApplicationViews } from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { AnimalProvider } from './providers/AnimalProvider';
import { PostProvider } from './providers/PostProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <AnimalProvider>
          <PostProvider>
            <Header />
            <ApplicationViews />
          </PostProvider>
        </AnimalProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
