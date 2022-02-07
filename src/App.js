import React, { useState, useMemo } from "react"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { UserContext } from "./UserContext";
import { CoinsContext } from "./CoinsContext";

import MainContainer from './containers/MainContainer';
import Header from './components/Header';
import LoginFormContainer from "./containers/LoginFormContainer";
import ProfileContainer from "./containers/ProfileContainer";

import WelcomePage from "./components/WelcomePage";

import './styling.css';

function App() {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(null);

  const userVal = useMemo(() => ({ user, setUser }), [user, setUser]);
  const coinsVal = useMemo(() => ({ coins, setCoins }), [coins, setCoins]);

  return (
    <Router>
      <UserContext.Provider value={userVal}>
        <CoinsContext.Provider value={coinsVal}>
          {user ? 
          <div className="app">
            <Header />
          <div className="contents">
            <Routes>
              <Route path={user.user.username} exact element={<ProfileContainer/>}/>
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
        </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;