import React from 'react';

class NewIdiom extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { original, template, description, nouns, verbs, adjectives } = event.target;

    this.props.createIdiom({
      original: original.value,
      template: template.value,
      description: description.value,
      nouns: nouns.value.split(','),
      verbs: verbs.value && verbs.value.split(','),
      adjectives: adjectives.value && adjectives.value.split(','),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column' }}>
          <h1>New Idiom</h1>
          <input type="text" name="original" placeholder="Original"/>
          <input type="text" name="template" placeholder="Template"/>
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="nouns" placeholder="nouns"/>
          <input type="text" name="verbs" placeholder="verbs"/>
          <input type="text" name="adjectives" placeholder="adjectives"/>
          <button type="submit">Add idiom</button>
        </form>
      </div>
    );
  }
}

export default NewIdiom;
