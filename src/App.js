import React, { Component } from 'react';
import './App.css';
import PriceChartPage from './containers/PricesChartPage';

class App extends Component {
  render() {
    return (
      <main>
          <PriceChartPage></PriceChartPage>
      </main>
    );
  }
}

export default App;
