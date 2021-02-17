import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './landing';
import Header from './Header';
import Dashboard from './Dashboard';

const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends Component {
  componentDidMount(){
  this.props.fetchUser();//action creater with fetch API, the API determines the state of user if he's logged in and direct to the page

  }
  render() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}
};
export default connect(null, actions)(App);
