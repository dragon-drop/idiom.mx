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
        <span onClick={this.handleUpvote} className={`idiot__upvote ${this.props.isUpvoted ? 'i-heart' : 'i-heart-o'}`}></span>
        <hr />
        <p className="idiot__description">{description}</p>
        <a href="/" className="button--reload"><i className="i-refresh"></i></a>
      </div>
    );
  }
}

export default Idiot;
