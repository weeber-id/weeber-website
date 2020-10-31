import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { useQuery } from '../../utils/use-query';

const RedirectPage = () => {
  const url = useQuery().get('url');
  const text = useQuery().get('text');
  const fb_event = useQuery().get('fb_event');
  const GA_event_action = useQuery().get('GA_event_action');
  const GA_event_category = useQuery().get('GA_event_category');

  useEffect(() => {
    if (fb_event) {
      ReactPixel.track(fb_event);
    }

    if (GA_event_action && GA_event_category) {
      ReactGA.event({
        action: GA_event_action,
        category: GA_event_category
      });
    }

    if (url && text) {
      setTimeout(() => {
        window.location.href = `${url}&text=${encodeURIComponent(text)}`;
      }, 1500);
    } else if (url && !text) {
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
    }
  }, [url, fb_event, GA_event_category, GA_event_action, text]);

  return (
    <div className="redirecting">
      <div className="body-wrapper">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Redirecting ...</h1>
    </div>
  );
};

export default RedirectPage;
