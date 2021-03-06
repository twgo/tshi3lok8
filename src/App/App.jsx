import React from 'react';

import './App.css';

import Debug from 'debug';
var debug = Debug('tshi3:App');

export default class App extends React.Component {

  render() {
    return (
      <div className='app background'>
        <h1 className='ui  blue header'>臺語線頂辨識</h1>
        {this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.object,
};
