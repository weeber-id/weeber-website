import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import {
  About,
  HireUs,
  LandingPage,
  NotFound,
  StudyCase,
  StudyCaseDetails
} from './pages';
import 'swiper/swiper.scss';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactPixel.init('1123787818016659', undefined, {
      autoConfig: true,
      debug: false
    });
    ReactGA.initialize('UA-140487384-2', { debug: false });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    ReactPixel.pageView();
    ReactGA.pageview(pathname);
  }, [pathname]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/hire-us" exact component={HireUs} />
        <Route path="/about" exact component={About} />
        <Route path="/works" exact component={StudyCase} />
        <Route path="/works/:id" exact component={StudyCaseDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
