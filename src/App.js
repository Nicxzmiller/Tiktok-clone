import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>TikTok</h1>
        <div className="app__videos">
            <Video/>
            <Video/>
            <Video/>
            <Video/>
        </div>
    </div>
  );
}

export default App;
