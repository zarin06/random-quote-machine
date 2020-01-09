import React from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';
import video from './assets/video.mp4'

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="card myCard centeredDiv">
              <QuoteCard />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;