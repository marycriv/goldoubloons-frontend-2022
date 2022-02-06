import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { UserContext } from "./UserContext";

import MainContainer from './containers/MainContainer';
import Header from './components/Header';
import LoginFormContainer from "./containers/LoginFormContainer";

import './styling.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="contents">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/login" exact element={<LoginFormContainer/>}/>
            <Route path="/main" element={<MainContainer/>}/>
          </Routes>
        </UserContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
