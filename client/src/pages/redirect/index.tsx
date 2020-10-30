import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { LoadingMessage } from '../../components';
import { useQuery } from '../../utils/use-query';

const RedirectPage = () => {
  const url = useQuery().get('url');
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

    if (url) {
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
    }
  }, [url, fb_event, GA_event_category, GA_event_action]);

  return (
    <div>
      <LoadingMessage message="Redirecting..." />
    </div>
  );
};

export default RedirectPage;
