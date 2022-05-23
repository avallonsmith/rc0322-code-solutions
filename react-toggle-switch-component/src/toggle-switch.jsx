import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = { isClicked: false };
  }

  clicked() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let buttonClass = 'button-off';
    let spanText = 'OFF';
    let divClass = 'off-circle';
    if (this.state.isClicked === false) {
      buttonClass = 'button-off';
      spanText = 'OFF';
      divClass = 'off-circle';
    } else {
      buttonClass = 'button-on';
      spanText = 'ON';
      divClass = 'on-circle';
    }

    return (
    <div>
      <button className={ buttonClass } onClick={this.clicked}>
          <div className={ divClass }></div>
      </button>
      <span> { spanText } </span>
    </div>
    );
  }
}

export default Switch;
