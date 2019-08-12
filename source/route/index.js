// @flow
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/mainPage'


class AppRoute extends Component {
  

  render() {
    return (
      <React.Fragment>
        <Route
          component={MainPage}
          exact
          path='/object'
        />
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = () => ({
  
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRoute)
);
