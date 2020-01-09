import React from 'react';

class NewQuoteButton extends React.Component {

  render() {

    return (
      <div className="btnClass">
        <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote" className="btn"><i class="fab fa-twitter fa-3x"></i></a>
        <button id="new-quote" onClick={this.props.onNewQuoteClick} className="btn btn-dark">New Quote</button>
      </div>
    );
  }
}

export default NewQuoteButton;
