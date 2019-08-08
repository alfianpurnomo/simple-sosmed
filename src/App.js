import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Home from './Container/Home';
import Users from './Container/Users';
import Profile from './Container/Profile';
import { history } from './_Config/History';

function App() {
  return (
    <div>
        <Router history={history}>
            <div>
              <section>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/users" component={Users} />
                  <Route path="/users/:id" component={Profile} />
                </Switch>
              </section>
            </div>
        </Router>
      </div>
  );
}

export default App;
