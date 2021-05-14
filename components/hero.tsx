import { FunctionComponent } from 'react';

const Hero: FunctionComponent<{
  title?: string;
  subtitle?: string;
  cta?: { text: string; link: string };
  mainPicture?: string;
  mainPictureAlt?: string;
}> = function (props) {
  return (
    <section className='hero is-small'>
      <div className='hero-head'></div>

      <div className='hero-body'>
        <div className={`${props.title ? 'section' : ''}`}>
          <div className='container has-text-centered'>
            {props.title && <h1 className='title is-spaced'>{props.title}</h1>}

            {props.subtitle && (
              <h2
                className='subtitle mt20'
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              ></h2>
            )}

            {props.cta && (
              <p>
                <a className='button is-primary' href={props.cta.link}>
                  <span>{props.cta.text}</span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      {props.mainPicture && (
        <figure className='image rounded main-picture cb'>
          <img
            src={props.mainPicture}
            alt={props.mainPictureAlt}
            loading='lazy'
          />
        </figure>
      )}
    </section>
  );
};

Hero.defaultProps = { cta: null, mainPicture: null };

export default Hero;
