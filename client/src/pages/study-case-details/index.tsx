import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Footer, Header, ImageWrapper } from '../../components';
import StudyCases from '../../json/study-cases.json';

interface StudyCaseRouteParam {
  id: string;
}

interface StudyCasesData {
  id: string;
  heading: string;
  summary: string;
  site_url: string;
  deliverables: string[];
  technologies: string[];
  client_logo_path: string;
  client_preview_path: string;
  client_project: string;
}

const StudyCaseDetails = () => {
  const [state, setState] = useState<StudyCasesData>({
    deliverables: [],
    heading: '',
    id: '',
    site_url: '',
    summary: '',
    technologies: [],
    client_logo_path: '',
    client_preview_path: '',
    client_project: ''
  });
  const { id } = useParams<StudyCaseRouteParam>();
  const history = useHistory();
  const studyCases: StudyCasesData[] = StudyCases;
  useEffect(() => {
    const data = studyCases.find((studyCase) => studyCase.id === id)!;

    if (data) {
      setState({ ...data });
    } else {
      history.replace('/not-found');
    }
  }, [id, studyCases, history]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://weeber.id/works/${id}`} />
        <title>
          {state.client_project} Case Study -{' '}
          {state.heading.split('<br />').join(' ')}
        </title>
        <meta name="description" content={state.summary} />
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
        <meta property="og:description" content={state.summary} />
        <meta property="og:site_name" content="Weeber Indonesia" />
        <meta property="og:url" content={`https://weeber.id/works/${id}`} />
      </Helmet>
      <Header />
      <main className="case-details">
        <section className="hero">
          <div className="max-width-1200 hero__container">
            <div className="hero__details">
              <h1
                dangerouslySetInnerHTML={{ __html: state.heading }}
                className="heading-secondary mb-3"
              />
              <span className="hero__label mb-1">CLIENT</span>
              <ImageWrapper
                src={require(`../../assets/logos/${state.client_logo_path}`)}
                alt="vokasi connect website"
                className="hero__client-logo"
              />
            </div>
            <div className="hero__preview">
              <ImageWrapper
                src={require(`../../assets/images/${state.client_preview_path}`)}
                alt="vokasi connect website"
                className="hero__preview-img"
                unsetWidth
              />
            </div>
          </div>
        </section>
        <section className="summary">
          <div className="max-width-1200 summary__container">
            <h2 className="heading-tertiary mb-3">Summary</h2>
            <div className="summary__details">
              <p className="paragraph mb-3">{state.summary}</p>
              <Button url={state.site_url} isExternal variant="outlined">
                Visit Site
              </Button>
            </div>
          </div>
        </section>
        <section className="deliver-tech">
          <div className="max-width-1200 deliver-tech__container">
            <div className="deliver-tech__deliverables">
              <h2 className="heading-tertiary mb-3">Deliverables</h2>
              <ul className="deliver-tech__lists">
                {state.deliverables.map((val) => (
                  <li key={val} className="deliver-tech__list">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="deliver-tech__techs">
              <h2 className="heading-tertiary mb-3">Technologies</h2>
              <ul className="deliver-tech__lists">
                {state.technologies.map((val) => (
                  <li key={val} className="deliver-tech__list">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StudyCaseDetails;
