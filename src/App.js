import React, { Component } from 'react';
import Navigasibar from './components/Navigasibar';
import Footer from  './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigasibar />
        <Footer />
      </div>
    );
  }
}

export default App;
