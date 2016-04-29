import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import DatePickerComponent from './DatePickerComponent.jsx';

var moment = require('moment');

class App extends React.Component {
  render () {
    return (
        <div>
        <p> Hello! Select between what dates you want to see gigs!</p>
        <DatePickerComponent date={moment()}/>
        <DatePickerComponent date={moment().add(7, "days")}/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
