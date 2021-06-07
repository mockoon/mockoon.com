import { FunctionComponent } from 'react';

const Hero: FunctionComponent<{
  title?: string;
  subtitle?: string;
  cta?: { text: string; link: string };
  mainPicture?: string;
  mainPictureAlt?: string;
}> = function (props) {
  return (
    <section className='container text-center py-5 py-md-5'>
      <div className='row'>
        <div className='col-12 col-md'>
          {props.title && <h1 className='display-4 mb-2'>{props.title}</h1>}

          {props.subtitle && (
            <h2
              className='h4 text-muted'
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
