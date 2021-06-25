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
        props.mainPicture ? 'py-lg-11 py-5 mb-4' : 'pt-8 pb-4'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          {props.mainPicture && (
            <div className='col-12 col-lg-6 order-lg-2'>
              <div className='skewed-screenshot mb-8 mb-lg-0'>
                <img
                  src={props.mainPicture}
                  alt={props.mainPictureAlt}
                  loading='lazy'
                  className=' img-fluid '
                />
              </div>
            </div>
          )}
          <div
            className={`col-12 ${
              props.mainPicture ? 'col-lg-6' : 'col-lg-12 text-center'
            } order-lg-1`}
          >
            {props.title && (
              <h1
                dangerouslySetInnerHTML={{ __html: props.title }}
                className={`display-4 text-center ${
                  props.mainPicture ? 'text-lg-start' : ''
                } `}
              ></h1>
            )}
            {props.subtitle && (
              <p
                className={`lead ${
                  props.mainPicture ? 'text-lg-start' : ''
                }  text-center text-muted mb-6 mb-lg-8`}
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              ></p>
            )}
            {props.cta && (
              <div className='hero-cta text-lg-start text-center'>
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
