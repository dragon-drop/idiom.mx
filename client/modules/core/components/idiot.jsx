import React from 'react';

class Idiot extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.generateNewIdiot = this.generateNewIdiot.bind(this);
  }

  handleUpvote(event) {
    event.preventDefault();
    this.props.upvote();
    event.target.disabled = true;
  }

	generateNewIdiot(event) {
		this.props.generate();
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
        <button className="button--reload" onClick={this.generateNewIdiot}><i className="i-refresh"></i></button>
      </div>
    );
  }
}

export default Idiot;
