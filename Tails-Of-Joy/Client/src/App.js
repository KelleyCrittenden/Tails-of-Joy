
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ApplicationViews />
      </UserProfileProvider>
    </Router>
  );
}

export default App;
