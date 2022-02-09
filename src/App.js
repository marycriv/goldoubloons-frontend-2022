import React, { useState, useMemo, useEffect } from "react"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { UserContext } from "./UserContext";
import { CoinsContext } from "./CoinsContext";

import Header from './components/Header';
import LoginFormContainer from "./containers/LoginFormContainer";
import ProfileContainer from "./containers/ProfileContainer";

import WelcomePage from "./components/WelcomePage";
import ConfirmationPage from "./components/ConfirmationPage";
import SignupForm from './components/SignupForm';

import PressingContainer from "./containers/PressingContainer";

import './styling.css';

const useFetch = url => {
  const [pressings, setPressings] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const pressingsData = data.data;
    setPressings(pressingsData);
    setLoading(false);
  }, []);

  return { pressings, loading };
};

function App() {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(null);

  const userVal = useMemo(() => ({ user, setUser }), [user, setUser]);
  const coinsVal = useMemo(() => ({ coins, setCoins }), [coins, setCoins]);

  const { pressings, loading } = useFetch("http://localhost:3010/api/v1/pressings");

  return (
    <Router>
      <UserContext.Provider value={userVal}>
        <CoinsContext.Provider value={coinsVal}>
          {user ? 
          <div className="app">
            <Header />
          <div className="contents">
            <Routes>
              <Route path={user.username} exact element={<ProfileContainer/>}/>
              <Route path="/main" element={<PressingContainer pressings={pressings} />}/>
              <Route path="/success" element={<ConfirmationPage/>}/>
            </Routes>
          </div>
        </div>
          : <div className="app">
              <Header />
                <Routes>
                  <Route path="/" exact element={<WelcomePage />} />
                  <Route path="/login" exact element={<LoginFormContainer/>}/>
                  <Route path="/signup" element={<SignupForm />}/>
                </Routes>
          </div>}
        </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;