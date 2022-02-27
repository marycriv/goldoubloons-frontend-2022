import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { render, screen } from '@testing-library/react';
import WelcomePage from '../../containers/WelcomePage';

import { UserContext } from '../../contexts/UserContext';
import { CoinsContext } from '../../contexts/CoinsContext';
import { PressingsContext } from '../../contexts/PressingsContext';

test('renders welcome page', () => {
  const val = {"username": "mike", "password": "password"};

  render(
    <Router>
      <UserContext.Provider value={val}>
      <CoinsContext.Provider value={val}>
      <PressingsContext.Provider value={val}>
        <WelcomePage />
      </PressingsContext.Provider>
      </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
    );

  const title = screen.getByText(/An NFT marketplace that meets your needs/i);
  expect(title).toBeInTheDocument();

  const loginButton = screen.getByText(/login/i);
  expect(loginButton).toBeInTheDocument();

  const signupButton = screen.getByText(/signup/i);
  expect(signupButton).toBeInTheDocument();

});