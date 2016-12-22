import React from 'react';

class Idiot extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote(event) {
    event.preventDefault();
    this.props.upvote();
    event.target.disabled = true;
  }

  render() {
    let { output, votes, description } = this.props.idiot;

    if (window.matchMedia && window.matchMedia('(min-width: 600px)').matches) {
      output = output.replace(/ (?=[^ ]*$)/i, '\u00a0');
    }

    return (
      <div className="idiot">
        <h1 className="idiot__phrase">{output}</h1>
        <p className="idiot__description">{description}</p>
        <a href="/" className="button--round">Another</a>
        {this.props.isUpvoted ? (<span>{votes}</span>) : (<button onClick={this.handleUpvote}>{votes} Vote!</button>)}
      </div>
    );
  }
}

export default Idiot;
