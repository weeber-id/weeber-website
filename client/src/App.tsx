import React from 'react';
import { Route } from 'react-router-dom';
import { About, HireUs, LandingPage } from './pages';
import 'swiper/swiper.scss';
import StudyCase from './pages/study-case';
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/hire-us" exact component={HireUs} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={StudyCase} />
    </div>
  );
}

export default App;
