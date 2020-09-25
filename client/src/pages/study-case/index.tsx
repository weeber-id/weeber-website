import React from 'react';
import { Helmet } from 'react-helmet';
import { ImgWorkTelukJambe, ImgWorkVokasiConnect } from '../../assets';
import { Card, Footer, Header } from '../../components';

const StudyCase = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://weeber.id/works" />
        <title>Weeber - Explore Our Work With a List of Our Case Studies</title>
        <meta
          name="description"
          content="See a few examples of our work in product design, web application development, and more."
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
          content="See a few examples of our work in product design, web application development, and more."
        />
        <meta property="og:site_name" content="Weeber Indonesia" />
        <meta property="og:url" content="https://weeber.id/works" />
      </Helmet>
      <Header />
      <Header />
      <main className="study-case">
        <div className="max-width-1200 study-case__container">
          <section className="hero">
            <h1 className="heading-primary">Works</h1>
            <p className="paragraph">Weeber Proudly Present</p>
          </section>
          <section className="cards">
            <Card
              type="work"
              alt="Vokasi Connect"
              img={ImgWorkVokasiConnect}
              platform="Website"
              title="Vokasi Connect"
              description="Vokasi Connect is a platform initiated by BEM Vokasi UI 2020. It helps the Vocational Students at Universitas Indonesia to give their aspirations in terms of academics, sexual abuse, financial issues, mental health, and facility issues on the campus."
              url="/works/vokasi-connect"
            />
            <Card
              type="work"
              alt="Bina Desa"
              img={ImgWorkTelukJambe}
              platform="Coming Soon"
              title="Bina Desa"
              description="One-stop Platform for Teluk Jambe Village Public Administration."
              isComingSoon
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudyCase;
