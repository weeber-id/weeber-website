import React from 'react';
import { ImgWorkTelukJambe, ImgWorkVokasiConnect } from '../../assets';
import { Card, Footer, Header } from '../../components';

const StudyCase = () => {
  return (
    <>
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
