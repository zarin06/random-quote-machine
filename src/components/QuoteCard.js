import React from 'react';
import NewQuoteButton from './NewQuoteButton';
import quotable from '../api/quotable';
import '../App.css';

class QuoteCard extends React.Component {
  state = {
    author: 'Yogi Berra',
    quote: "In theory, theory and practice are the same. In practice, they’re not.",
  }

  onNewQuoteClick = async () => {
    // const response = await quotable.get('/random.json');
    const response = await quotable.get('/quotes/random');
    this.setState({author: response.data.author, quote: response.data.en});
  }

  render() {
    return (
      <div id="quote-box" className="card-body">
        <p id="text"><i className="fas fa-quote-left"></i>{this.state.quote}</p>
        <p id="author" style={{ display: 'flex', justifyContent: 'flex-end' }}>- {this.state.author}</p>
        <NewQuoteButton onNewQuoteClick={this.onNewQuoteClick} />
      </div>
    );
  }
}

export default QuoteCard;