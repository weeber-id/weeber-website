import React from 'react';
import Swiper from 'react-id-swiper';
import {
  ImgLandingHero,
  ImgLandingFeaturedWork,
  IconSPA,
  IconRocket,
  IconMobileResponsive,
  IconPyramid,
  ImgCoreSrvWebApp,
  ImgCoreSrvWebDesign,
  ImgCoreSrvTestingApp
} from '../../assets';
import { Button, Card, Feature, Footer, Header } from '../../components';

const LandingPage = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    centeredSlides: true
  };
  return (
    <>
      <Header />
      <main className="landing-page max-width-1200">
        <section className="landing-page__hero">
          <div className="landing-page__hero-texts">
            <h1 className="heading-primary mb-2">
              Let's Make Better World Together.
            </h1>
            <p className="paragraph mb-3">
              Turn your idea to become alive and accessible by everyone through
              website application.
            </p>
            <div className="landing-page__buttons">
              <Button>Work With Us</Button>
              <Button color="white">View Our Works</Button>
            </div>
          </div>
          <div className="landing-page__hero-img-container">
            <img src={ImgLandingHero} alt="Weeber Agency Hero" />
          </div>
        </section>
        <section className="landing-page__featured-work">
          <h2 className="heading-secondary mb-5">Featured Work</h2>
          <img
            className="landing-page__featured-work-img mb-5"
            src={ImgLandingFeaturedWork}
            alt="Weeber Featured Work"
          />
          <Button variant="outlined">See Study Case</Button>
        </section>
        <section className="features">
          <div className="features__images"></div>
          <div className="features__features">
            <h2 className="heading-secondary mb-2">
              Bring Your Website To The Next Level.
            </h2>
            <Feature
              className="features__feature"
              Icon={IconSPA}
              title="Single Page Application"
              description="Create Fast and Reliable Website for the best User Experince. Created using the most popular Javascript Frontend Library which is React."
            />
            <Feature
              className="features__feature"
              Icon={IconRocket}
              title="Advanced Web Technology"
              description="We use the most updated and the latest technology were used these days by many Software Engineer around the world such as Docker, Kubernetes, Golang, Redis, MongoDB, etc."
            />
            <Feature
              className="features__feature"
              Icon={IconMobileResponsive}
              title="Mobile Responsive"
              description="Mobile Responsive these days is must, every website have to provide this future, so do we."
            />
            <Feature
              className="features__feature"
              Icon={IconPyramid}
              title="UI / UX Best Practice"
              description="We provide best UI / UX practice, so your user will get seamless experience when access your website and achieve the objective easily whether it is purchase, fill the form or finish some task."
            />
          </div>
        </section>
        <section className="services">
          <h2 className="heading-secondary mb-4">Our Core Services.</h2>
          <div className="services__cards">
            <Card
              type="service"
              title="Web App Development"
              description="Design, Develop, Deploy your app right away, and we will help the process since the beginning."
              img={ImgCoreSrvWebApp}
            />
            <Card
              type="service"
              title="Website Design"
              description="Need website design that catchy? Or simple company website using wordpress or webflow which are easy to maintenance? This service should be perfect fit for you."
              img={ImgCoreSrvWebDesign}
            />
            <Card
              type="service"
              title="Testing Application "
              description="Good app is app that solve user problems, testing will make sure your user get what they really needed the most. And we will cover this difficult job for you."
              img={ImgCoreSrvTestingApp}
            />
          </div>
        </section>
        <section className="testimonies">
          <h2 className="heading-secondary mb-5">What People Say About Us.</h2>
          <div className="testimonies__swiper">
            <Swiper {...params}>
              <div className="testimony">
                <p className="testimony__text mb-3">
                  People need to believe that there is a lot of solution to
                  solve their problems and Weeber will make you believe that
                  solving the problem is absolutely possible. Weeber can also
                  create technology that able to help people and is most
                  powerful when it empowers everyone.
                </p>
                <p className="testimony__name">
                  -Akmal Luthfiansyah, President of BEM Vokasi UI 2020-
                </p>
              </div>
              <div className="testimony">
                <p className="testimony__text mb-3">
                  Weeber has good service, especially when it comes to hearing
                  complaints and customer requests. They can understand very
                  well what the customer wants, and can also provide the right
                  solution. Not only is it a go-to for creating websites, but
                  also a consultant for those who need the best solution for
                  their website.
                </p>
                <p className="testimony__name">
                  -Ahmad Shiddiq, Entrepreneur Representative-
                </p>
              </div>
            </Swiper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
