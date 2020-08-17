import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './views/Home/Home';
import Rooms from './views/Rooms/Rooms';
import Room from './views/Room/Room';
import Logout from './common/components/Logout';
import './index.css';

const RequireAuth = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return children;
};

function App({ cable, currentUser }) {
  return (
    <div className="app-wrapper">
      <Router>
        {currentUser && <Logout />}
        <Switch>
          <Route exact path="/" component={Home} />

          <RequireAuth currentUser={currentUser}>
            <Route exact path="/rooms" render={() => <Rooms cable={cable} />} />
            <Route
              exact
              path="/room/:id"
              render={(props) => <Room cable={cable} {...props} />}
            />
          </RequireAuth>
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  cable: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(App);
