import React from 'react';

class Button extends React.Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button onClick={ onClick } disabled={ disabled }>{ text }</button>
    )
  }
}

export default Button;