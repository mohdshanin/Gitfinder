import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Footer from './components/layout/Footer';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
// import Home from './components/pages/Home';
import './sass/App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="main_div">
          <Navbar />
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  );
                }}
              />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          <Footer />
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;