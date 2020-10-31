import React, { useEffect, useState } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { LogoWeeberDark } from '../../assets';
import { LinkTreeList } from '../../components';
import LoadingAnimation from '../../components/loading-animation';
import { urlServer } from '../../utils/urlServer';

type LinkTree = {
  title: string;
  link: string;
  ID: string;
};

const LINK_DEFAULT: LinkTree[] = [
  {
    title: 'Official Website Weeber Indonesia',
    link: '/',
    ID: 'official-website-weeber'
  },
  {
    title: 'Order Kaos Weeber Apparel via WA',
    link:
      '/redirect?fb_event=Contact&GA_event_action=contact_WA&GA_event_category=customer_apparel&url=https://api.whatsapp.com/send?phone=62081312586140&text=Welcome%20to%20Weeber%20Apparel%21%0D%0A%0D%0A%5BFORMAT%20PEMESANAN%5D%0D%0ANama%3A%20%0D%0AJenis%3A%0D%0AJumlah%3A%0D%0AAlamat%3A%0D%0A%0D%0A%23ShowYourIdentity%0D%0A%23WeeberApparel%0D%0A%23TalkLessCodeMore',
    ID: 'order-kaos-weeber'
  },
  {
    title: 'Instagram Weeber Apparel',
    link: 'https://instagram.com/weeber_apparel',
    ID: 'ig-weeber-apparel'
  },
  {
    title: 'Bikin Aplikasi Web / Mobile / Desktop',
    link: '/hire-us',
    ID: 'bikin-aplikasi-di-weeber'
  }
];

const LinkTree = () => {
  const [linkTrees, setLinkTrees] = useState<LinkTree[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${urlServer}/link-tree`);

        if (response.status === 200) {
          const data = await response.json();
          setLinkTrees(data.data);
        } else setLinkTrees(LINK_DEFAULT);
      } catch (err) {
        setLinkTrees(LINK_DEFAULT);
      }
    })();
  }, []);

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
        {linkTrees.length > 0 ? (
          linkTrees.map((val, i) => (
            <LinkTreeList
              title={val.title}
              url={val.link}
              key={`link-tree-${val.ID}-${i}`}
            />
          ))
        ) : (
          <div className="loading-wrapper">
            <LoadingAnimation />
          </div>
        )}
      </ul>
    </div>
  );
};

export default LinkTree;
