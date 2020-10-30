import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { LogoWeeberDark } from '../../assets';
import { LinkTreeList } from '../../components';

const LinkTree = () => {
  useEffect(() => {
    ReactPixel.track('ViewContent');
  }, []);

  return (
    <div className="link-tree-page">
      <div className="logo-wrapper">
        <LogoWeeberDark className="logo" />
      </div>
      <span className="title">@weeber_id</span>
      <ul className="link-trees">
        <LinkTreeList title="Official Website Weeber Indonesia" url="/" />
        <LinkTreeList
          title="Order Kaos Weeber Apparel via WA"
          url="/redirect?fb_event=Contact&GA_event_action=contact_WA&GA_event_category=customer_apparel&url="
        />
        <LinkTreeList
          title="Instagram Weeber Apparel"
          url="https://instagram.com/weeber_apparel"
        />
        <LinkTreeList
          title="Bikin Aplikasi Web / Mobile / Desktop"
          url="/hire-us"
        />
      </ul>
    </div>
  );
};

export default LinkTree;
