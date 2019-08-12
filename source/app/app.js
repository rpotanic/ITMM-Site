import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import Route from '../route';

import '../css/main.scss'

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Route />
      </React.Fragment>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {}

const Application = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReactComponent)
);

export default hot(module)(() => <Application />);
