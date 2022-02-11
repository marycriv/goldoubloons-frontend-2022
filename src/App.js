import React, { useState, useMemo } from "react"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { UserContext } from "./contexts/UserContext";
import { CoinsContext } from "./contexts/CoinsContext";
import { PressingsContext } from "./contexts/PressingsContext";

import Header from './components/Header';
import ProfileContainer from "./containers/ProfileContainer";
import AuctionContainer from "./containers/AuctionContainer";
import PressingContainer from "./containers/PressingContainer";

import WelcomePage from "./components/WelcomePage";
import ConfirmationPage from "./components/ConfirmationPage";
import SignupForm from './components/SignupForm';
import ErrorPage from "./components/ErrorPage";
import LandingPage from "./components/LandingPage";
import UpdateForm from './components/UpdateForm';
import LoginForm from "./components/LoginForm";

import './styling.css';

function App() {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(null);
  const [pressings, setPressings] = useState(null);

  const userVal = useMemo(() => ({ user, setUser }), [user, setUser]);
  const coinsVal = useMemo(() => ({ coins, setCoins }), [coins, setCoins]);
  const pressingsVal = useMemo(() => ({ pressings, setPressings }), [pressings, setPressings]);

  return (
    <Router>
      <UserContext.Provider value={userVal}>
        <CoinsContext.Provider value={coinsVal}>
          <PressingsContext.Provider value={pressingsVal}>
            {user ? 
            <div className="app">
              <Header />
            <div className="contents">
              <Routes>
                <Route path='*' element={<ErrorPage />} />
                {/* <Route path="/" element={<PressingContainer />}/> */}
                <Route path={user.username} exact element={<ProfileContainer/>}/>
                <Route path={user.username + '/edit'} exact element={<UpdateForm />}/>
                <Route path="/main" element={<PressingContainer />}/>
                <Route path="/auctions" element={<AuctionContainer />}/>
                <Route path="/success" element={<ConfirmationPage/>}/>
              </Routes>
            </div>
          </div>
            : <div className="app">
                <Header />
                  <Routes>
                    <Route path='*' element={<ErrorPage />} />
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/landing" exact element={<WelcomePage />} />
                    <Route path="/login" exact element={<LoginForm/>}/>
                    <Route path="/signup" element={<SignupForm />}/>
                  </Routes>
            </div>}
          </PressingsContext.Provider>
        </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;