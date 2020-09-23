import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  About,
  HireUs,
  LandingPage,
  StudyCase,
  StudyCaseDetails
} from './pages';
import 'swiper/swiper.scss';
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

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
