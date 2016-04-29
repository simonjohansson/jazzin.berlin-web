import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class DatePickerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: this.props.date};
    this.handleChange = this.handleChange.bind(this);
  }

  onCreate(date){
    this.setState({date: date});
  }

  handleChange(date) {
    this.setState({date: date});
  }

  render() {
    return (
        <DatePicker selected={this.state.date} onChange={this.handleChange} dateFormat="YYYY-MM-DD" />
    )
  }
}

export default DatePickerComponent;
