import React from 'react';
import { Route } from 'react-router-dom';
import {
  About,
  HireUs,
  LandingPage,
  StudyCase,
  StudyCaseDetails
} from './pages';
import 'swiper/swiper.scss';
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage} />
      <Route path="/hire-us" exact component={HireUs} />
      <Route path="/about" exact component={About} />
      <Route path="/works" exact component={StudyCase} />
      <Route path="/works/:id" exact component={StudyCaseDetails} />
    </div>
  );
}

export default App;
