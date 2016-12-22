import React from 'react';

class Idiot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idiot } = this.props;
    let { output } = idiot;

    if (window.matchMedia && window.matchMedia('(min-width: 600px)').matches) {
      output = output.replace(/ (?=[^ ]*$)/i, '\u00a0');
    }

    return (
      <div className="idiot">
        <h1 className="idiot__phrase">{output}</h1>
        <p className="idiot__description">{idiot.description}</p>
        <a href="/" className="button--round">Another</a>
      </div>
    );
  }
}

export default Idiot;
