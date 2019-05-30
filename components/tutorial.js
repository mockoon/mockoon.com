import Download from '../components/download';
import Newsletter from '../components/newsletter';
import TutorialsBack from '../components/tutorials-back';
import Layout from '../layout/layout';
import Hero from './hero';
import Meta from './meta';

function Tutorial(props) {
  return (
    <Layout>
      <Meta title={props.meta.title} description={props.meta.description} />
      <Hero title={props.meta.title} subtitle={props.meta.description} />

      <Download />

      <div className="section">
        <div className="container">

          {props.children}

          <TutorialsBack />
        </div>
      </div>

      <Newsletter />

    </Layout >
  );
};

export default Tutorial;
