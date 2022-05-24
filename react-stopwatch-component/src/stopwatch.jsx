import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.timer = this.timer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = { isClicked: false, counter: 0 };
  }

  timer() {
    this.setState({ counter: this.state.counter + 1 });
  }

  resetTimer() {
    if (this.state.isClicked === false) {
      this.setState({ counter: 0 });
    }
  }

  clicked() {
    if (this.state.isClicked === false) {
      this.intervalId = setInterval(this.timer, 1000);
    } else {
      clearInterval(this.intervalId);
    }
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let icon = 'fas fa-play';
    if (this.state.isClicked === true) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }
    return (
    <div className='container'>
      <div className='row'>
        <div className='circle' onClick={ this.resetTimer }>
          <div className='numbers'>{ this.state.counter }</div>
        </div>
      </div>
      <div className='row'>
          <i className={ icon } onClick={ this.clicked } ></i>
      </div>
    </div>
    );
  }
}

export default Stopwatch;
