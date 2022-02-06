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
      <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
          <Header />
        <div className="contents">
          <Routes>
            <Route path="/login" exact element={<LoginFormContainer/>}/>
            <Route path="/main" element={<MainContainer/>}/>
          </Routes>
        </div>
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
