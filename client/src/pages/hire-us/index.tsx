import React, { useEffect, useState } from 'react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import { Button, Footer, Header, Input, TextArea } from '../../components';

interface HireUsState {
  projectName: string;
  name: string;
  email: string;
  phoneNumber: string;
  service: string;
  serviceDetails: string;
  budget: string;
  hearAboutWeeber: string;
}

const HireUs = () => {
  const [state, setState] = useState<HireUsState>({
    projectName: '',
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
    serviceDetails: '',
    budget: '',
    hearAboutWeeber: ''
  });

  useEffect(() => {
    ReactPixel.track('Contact');
  }, []);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    ReactPixel.track('Lead');
    ReactGA.event({
      action: 'Hire for project',
      category: 'Client'
    });
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://weeber.id/hire-us" />
        <title>Start a project With Weeber</title>
        <meta
          name="description"
          content="Fill in a few details to get in-touch with one of our local designers or developers. They’ll help you build great software."
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
          content="Fill in a few details to get in-touch with one of our local designers or developers. They’ll help you build great software."
        />
        <meta property="og:site_name" content="Weeber Indonesia" />
        <meta property="og:url" content="https://weeber.id/hire-us" />
      </Helmet>
      <Header />
      <main className="hire-us">
        <section className="hero">
          <div className="max-width-1200 hero__container">
            <h1 className="heading-primary mb-3">
              Your Dream Waiting To Become Alive.
            </h1>
            <p className="hero__sub-title">Connect With Our Experts.</p>
          </div>
        </section>
        <section className="form">
          <div className="form__container max-width-1200">
            <form onSubmit={handleSubmit} className="consultation">
              <Input
                value={state.projectName}
                onChange={handleChange}
                placeholder="Phoenix Project"
                type="text"
                label="What is your company or project name?"
                name="projectName"
              />
              <Input
                value={state.name}
                onChange={handleChange}
                name="name"
                placeholder="John Doe"
                type="text"
                label="What is your name?"
              />
              <Input
                value={state.email}
                onChange={handleChange}
                name="email"
                placeholder="john@doe.com"
                type="text"
                label="What is your email address?"
              />
              <Input
                value={state.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                placeholder="+6289xxxx"
                type="text"
                label="What is your phone number?"
              />
              <div className="consultation__radio-group">
                <span>What can weeber do for you?</span>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="service"
                  label="Create an amazing new product"
                  value="Create an amazing new product"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="service"
                  label="Make my great product even greater"
                  value="Make my great product even greater"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="service"
                  label="Something else"
                  value="Something else"
                />
              </div>
              <TextArea
                value={state.serviceDetails}
                onChange={handleChange}
                name="serviceDetails"
                label="Can you tell us little more about that?"
              />
              <div className="consultation__radio-group">
                <span>What is your budget?</span>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="budget"
                  label="Less than $5,000"
                  value="Less than $5,000"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="budget"
                  label="$5,000 - $10,000"
                  value="$5,000 - $10,000"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="budget"
                  label="$10,000 - $25,000"
                  value="$10,000 - $25,000"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="budget"
                  label="$25,000 - more"
                  value="$25,000 - more"
                />
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="budget"
                  label="To be determined"
                  value="To be determined"
                />
              </div>
              <Input
                value={state.hearAboutWeeber}
                onChange={handleChange}
                placeholder="Instagram, Linkedin, etc"
                type="text"
                label="How did you hear about weeber?"
                name="hearAboutWeeber"
              />
              <Button onClick={handleSubmit} color="green">
                Submit
              </Button>
            </form>
          </div>
        </section>
        <div className="gap" />
      </main>
      <Footer />
    </>
  );
};

export default HireUs;
