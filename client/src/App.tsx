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
  StudyCaseDetails,
  FallbackPage
} from './pages';
import 'swiper/swiper.scss';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>
          Weeber Indonesia | Custom Software Development & Design Company
        </title>
        <meta
          name="description"
          content="Design & Engineering Studio that have specialization in build a world class web application. We can help you bring your product to life - whether it's a Minimum Viable Product, UX/UI Services or Custom Software Development to scale your company."
        />
        <meta
          name="keywords"
          content="Web Design, Web Development, UI UX Design, Android Development, Full-Stack Developer"
        />
        <meta name="author" content="Weeber Indonesia" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://storages.weeber.id/public/assets/weeber-id.png"
        />
        <meta
          property="og:description"
          content="Design & Engineering Studio that have specialization in build a world class web application. We have expert designers and developers."
        />
        <meta property="og:site_name" content="Weeber Indonesia" />
        <meta property="og:url" content="https://weeber.id/" />
      </Helmet>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/hire-us" exact component={HireUs} />
        <Route path="/about" exact component={About} />
        <Route path="/works" exact component={StudyCase} />
        <Route path="/works/:id" exact component={StudyCaseDetails} />
        <Route path="/fallback" exact component={FallbackPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
