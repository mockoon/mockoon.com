import { FunctionComponent } from 'react';
import Nav from './nav';

const Hero: FunctionComponent<{
  title: string;
  subtitle?: string;
  withDownloadCTA?: boolean;
  mainPicture?: string;
}> = function(props) {
  return (
    <section className='hero is-small'>
      <div className='hero-head'>
        <Nav />
      </div>

      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title is-spaced'>{props.title}</h1>

          <h2
            className='subtitle mt20'
            dangerouslySetInnerHTML={{ __html: props.subtitle }}
          ></h2>

          {props.withDownloadCTA && (
            <p>
              <a className='button is-primary' href='#download'>
                <span>Download</span>
              </a>
            </p>
          )}
        </div>
      </div>

      {props.mainPicture && (
        <figure className='image rounded main-picture cb'>
          <img src={props.mainPicture} />
        </figure>
      )}
    </section>
  );
};

Hero.defaultProps = { withDownloadCTA: false, mainPicture: null };

export default Hero;
