import React from 'react';
import { Route } from 'react-router-dom';
import { About, LandingPage } from './pages';
import 'swiper/swiper.scss';
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/about" exact component={About} />
    </div>
  );
}

export default App;
