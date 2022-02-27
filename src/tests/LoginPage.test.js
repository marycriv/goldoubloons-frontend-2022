import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from '../containers/LoginPage';

import { UserContext } from '../contexts/UserContext';
import { CoinsContext } from '../contexts/CoinsContext';
import { PressingsContext } from '../contexts/PressingsContext';

test('renders login form', () => {
  const val = {"username": "mike", "password": "password"};
  render(
    <Router>
      <UserContext.Provider value={val}>
      <CoinsContext.Provider value={val}>
      <PressingsContext.Provider value={val}>
        <LoginPage />
      </PressingsContext.Provider>
      </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
    );
  
  // expect to see username field
  const usernameField = screen.getByLabelText(/Username/i);
  expect(usernameField).toBeInTheDocument();

  // expect to see password field
  const passwordField = screen.getByLabelText(/Password/i);
  expect(passwordField).toBeInTheDocument();

  const loginButton = screen.getByText(/login/i);
  expect(loginButton).toBeInTheDocument();

});

test('login with existing user, expect successful login', () => {
  const val = {"username": "mike", "password": "password"};
  render(
    <Router>
      <UserContext.Provider value={val}>
      <CoinsContext.Provider value={val}>
      <PressingsContext.Provider value={val}>
        <LoginPage />
      </PressingsContext.Provider>
      </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
    );

    // expect to see username field
    const usernameField = screen.getByLabelText(/Username/i);
    expect(usernameField).toBeInTheDocument();

    // expect to see password field
    const passwordField = screen.getByLabelText(/Password/i);
    expect(passwordField).toBeInTheDocument();

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    // fill out the form
    fireEvent.change(usernameField, {
      target: {value: "mike"},
    })
    fireEvent.change(passwordField, {
      target: {value: "password"},
    })
    
    fireEvent.click(loginButton)
})

test('login with user that does not exist, expect failed login', () => {
  const val = {"username": "mike", "password": "password"};
  render(
    <Router>
      <UserContext.Provider value={val}>
      <CoinsContext.Provider value={val}>
      <PressingsContext.Provider value={val}>
        <LoginPage />
      </PressingsContext.Provider>
      </CoinsContext.Provider>
      </UserContext.Provider>
    </Router>
    );

    // expect to see username field
    const usernameField = screen.getByLabelText(/Username/i);
    expect(usernameField).toBeInTheDocument();

    // expect to see password field
    const passwordField = screen.getByLabelText(/Password/i);
    expect(passwordField).toBeInTheDocument();

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    // fill out the form
    fireEvent.change(usernameField, {
      target: {value: "fake"},
    })
    fireEvent.change(passwordField, {
      target: {value: "fake"},
    })
    
    fireEvent.click(loginButton)

    const errorAlert = screen.getByText(/Error, incorrect username or password/i);
    expect(errorAlert).toBeInTheDocument();
})