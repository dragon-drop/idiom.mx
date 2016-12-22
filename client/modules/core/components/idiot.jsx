import React from 'react';

class Idiot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idiot } = this.props;
    console.log(idiot);
    return (
      <div>
        <h1>{idiot.output}</h1>
        <p>{idiot.description}</p>
        <a href="/">Again</a>
      </div>
    );
  }
}

export default Idiot;
