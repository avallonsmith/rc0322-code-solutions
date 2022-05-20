import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = { isClicked: 0 };
  }

  clicked() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    const totalClicks = this.state.isClicked;
    let buttonChange = 'no-click';
    if (totalClicks < 3) {
      buttonChange = 'no-click';
    } else if (totalClicks < 6) {
      buttonChange = 'three-clicks';
    } else if (totalClicks < 9) {
      buttonChange = 'six-clicks';
    } else if (totalClicks < 12) {
      buttonChange = 'nine-clicks';
    } else if (totalClicks < 15) {
      buttonChange = 'twelve-clicks';
    } else if (totalClicks < 18) {
      buttonChange = 'fifteen-clicks';
    } else {
      buttonChange = 'eighteen-clicks';
    }
    return <button className={`no-click ${buttonChange}`} onClick={this.clicked}>Hot Button</button>;
  }
}

export default CustomButton;
