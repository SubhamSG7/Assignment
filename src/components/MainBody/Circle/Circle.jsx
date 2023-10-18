import React, { Component } from 'react';
import './Circle.css'; // Create a CSS file for styling

class Circle extends Component {
  render() {
    const { percentage } = this.props;

    return (
      <div className="progress-container">
        <div
          className="progress"
          style={{ '--percentage': `${percentage}%` }}
        >
          <span className="progress-text">{78}%  <p>Total New Customer</p></span>
        </div>
      </div>
    );
  }
}

export default Circle;