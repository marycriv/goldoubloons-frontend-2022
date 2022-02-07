import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { UserContext } from "./UserContext";

import MainContainer from './containers/MainContainer';
import Header from './components/Header';
import LoginFormContainer from "./containers/LoginFormContainer";

import WelcomePage from "./components/WelcomePage";

import './styling.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
      {user ? 
      <div className="app">
        <Header />
      <div className="contents">
        <Routes>
          <Route path="/login" exact element={<LoginFormContainer/>}/>
          <Route path="/main" element={<MainContainer/>}/>
        </Routes>
      </div>
    </div>
      : <div className="app">
          <Header />
            <Routes>
              <Route path="/" exact element={<WelcomePage />} />
              <Route path="/login" exact element={<LoginFormContainer/>}/>
            </Routes>
      </div>}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
