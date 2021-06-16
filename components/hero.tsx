import { FunctionComponent } from 'react';

const Hero: FunctionComponent<{
  title?: string;
  subtitle?: string;
  cta?: { text: string; link: string }[];
  mainPicture?: string;
  mainPictureAlt?: string;
}> = function (props) {
  return (
    <section
      className={`position-relative ${
        props.mainPicture ? 'py-11 mb-4' : 'pt-8 pb-4'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          {props.mainPicture && (
            <div className='col-12 col-md-6 order-md-2'>
              <div className='img-skewed img-skewed-start mb-8 mb-md-0'>
                <img
                  src={props.mainPicture}
                  alt={props.mainPictureAlt}
                  loading='lazy'
                  className='screenshot img-fluid'
                  data-aos='img-skewed-item-start'
                  data-aos-delay='100'
                />
              </div>
            </div>
          )}
          <div
            className={`col-12 ${
              props.mainPicture ? 'col-md-6' : 'col-md-12 text-center'
            } order-md-1`}
            data-aos='fade-up'
          >
            {props.title && (
              <h1
                dangerouslySetInnerHTML={{ __html: props.title }}
                className={`display-3 ${
                  props.mainPicture ? 'text-md-start' : 'text-center'
                } `}
              ></h1>
            )}
            {props.subtitle && (
              <p
                className='lead text-muted mb-6 mb-md-8'
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              ></p>
            )}
            {props.cta && (
              <div className='hero-cta'>
                {props.cta.map((cta, index) => {
                  return (
                    <a href={cta.link} key={index} className='me-2'>
                      <button
                        className={`btn btn-primary${
                          index > 0 /*|| cta.link !== '/#download'*/
                            ? '-soft'
                            : ''
                        } lift`}
                      >
                        <span>
                          {cta.text}{' '}
                          {cta.link === '/#download' && (
                            <i className='icon-download'></i>
                          )}
                        </span>
                      </button>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = { cta: null, mainPicture: null, mainPictureAlt: null };

export default Hero;
