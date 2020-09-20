import React from 'react';
import {
  IconClients,
  IconGrowth,
  IconShield,
  ImgTeamAli,
  ImgTeamBayu,
  ImgTeamSyamil,
  ImgTeamZhorif
} from '../../assets';
import { Card, Footer, Header, Avatar } from '../../components';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <section className="about__hero">
        <h1 className="about__heading">Make It Happen .</h1>
      </section>
      <section className="about__desc">
        <div className="about__desc-container">
          <div className="about__description">
            <h3 className="heading-tertiary mb-2">
              Small Design & Engineering studio collaborating closely with
              clients.
            </h3>
            <p className="paragraph">
              We are a group of people who believe that technologies are no more
              than tools for the human being to achieve their purpose in this
              life.
              <br />
              <br />
              Started from a company who helped student organizations and
              community development project, We are transforming into something
              better to help more people with our problem-solving skills.
            </p>
          </div>
          <div className="about__desc-img" />
        </div>
      </section>
      <section className="about__philosophy">
        <div className="max-width-1200 about__philosophy-container">
          <h2 className="heading-secondary mb-5">Our Philosophy</h2>
          <div className="about__cards">
            <Card
              type="philosophy"
              Icon={IconGrowth}
              title="Goal-Driven ROI"
              description="We are not focusing only in designing and developing. But our focus is to solve client's problems using our expertise."
            />
            <Card
              type="philosophy"
              Icon={IconClients}
              title="Clients as Partners"
              description="Client is like family to us, project will go seamlessly if we are working together and have a good relationship."
            />
            <Card
              type="philosophy"
              Icon={IconShield}
              title="Transparent"
              description="Nobody likes to be cheated, transparency is the key of good relationship. And good relationship is the key of successful project."
            />
          </div>
        </div>
      </section>
      <section className="about__team">
        <div className="max-width-1200 about__team-container">
          <h2 className="heading-secondary">Weeber Family</h2>
          <div className="about__team-avatars">
            <Avatar
              src={ImgTeamZhorif}
              alt="Zhorif Maulana"
              name="Zhorif Maulana"
              role="Product Manager"
            />
            <Avatar
              src={ImgTeamBayu}
              alt="Bayu Aditya"
              name="Bayu Aditya"
              role="Back End Engineer"
            />
            <Avatar
              src={ImgTeamAli}
              alt="Azhar Ali"
              name="Azhar Ali"
              role="Front End Engineer"
            />
            <Avatar
              src={ImgTeamSyamil}
              alt="Syamil Fahmi"
              name="Syamil Fahmi"
              role="UI / UX Designer"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
