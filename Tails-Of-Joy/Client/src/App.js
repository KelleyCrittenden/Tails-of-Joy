
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import { ApplicationViews } from "./components/ApplicationViews";
import { AnimalProvider } from './providers/AnimalProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <AnimalProvider>
          <Header />
          <ApplicationViews />
        </AnimalProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
