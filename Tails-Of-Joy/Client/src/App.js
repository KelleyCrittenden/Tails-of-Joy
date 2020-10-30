import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { ApplicationViews } from "./components/ApplicationViews";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { AnimalProvider } from './providers/AnimalProvider';
import { PostProvider } from './providers/PostProvider';
import { CommentProvider } from './providers/CommentProvider';
import { AdoptionProvider } from './providers/AdoptionProvider'

function App() {
  return (
    <Router>

      <UserProfileProvider>
        <AdoptionProvider>
          <AnimalProvider>
            <PostProvider>
              <CommentProvider>
                <Header />
                <ApplicationViews />
              </CommentProvider>
            </PostProvider>
          </AnimalProvider>
        </AdoptionProvider>
      </UserProfileProvider>

    </Router>
  );
}

export default App;
