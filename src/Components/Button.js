import React from 'react';

class Button extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <button>{ text }</button>
    )
  }
}

export default Button;