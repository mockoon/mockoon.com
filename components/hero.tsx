import { FunctionComponent } from 'react';

const Hero: FunctionComponent<{
  title?: string;
  subtitle?: string;
  cta?: { text: string; link: string; blank?: boolean; subtitle?: string }[];
  ctaContent?: any;
  mainPicture?: string;
  mainPictureAlt?: string;
  mainPictureWidth?: number;
  mainPictureHeight?: number;
}> = function (props) {
  return (
    <section
      className={`position-relative ${
        props.mainPicture ? 'py-lg-10 py-5 mb-4' : 'pt-8 pb-4'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={`col-12 ${
              props.mainPicture ? 'col-lg-6' : 'col-lg-8 mx-auto text-center'
            }`}
          >
            {props.title && (
              <h1
                dangerouslySetInnerHTML={{ __html: props.title }}
                className={`display-4 text-center fw-bold ${
                  props.mainPicture ? 'text-lg-start' : ''
                } `}
              ></h1>
            )}
            {props.subtitle && (
              <p
                className={`lead ${
                  props.mainPicture ? 'text-lg-start' : ''
                }  text-center text-gray-700 mb-6 mb-lg-8`}
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              ></p>
            )}
            {props.cta && (
              <div
                className={`hero-cta ${
                  props.mainPicture ? 'text-lg-start' : ''
                } text-center`}
              >
                {props.cta.map((cta, index) => {
                  return (
                    <>
                      {' '}
                      <a
                        href={cta.link}
                        key={index}
                        target={cta.blank ? '_blank' : undefined}
                        className='me-2'
                      >
                        <button
                          className={`btn btn-primary${
                            index > 0 ? '-soft' : ''
                          } lift`}
                        >
                          <span>
                            {cta.text}{' '}
                            {cta.link === '/download/' && (
                              <i className='icon-download'></i>
                            )}
                          </span>
                        </button>
                      </a>
                      {cta.subtitle && (
                        <p className='m-0 text-muted fst-italic'>
                          <small>{cta.subtitle}</small>
                        </p>
                      )}
                    </>
                  );
                })}
              </div>
            )}
            {props.ctaContent}
          </div>
          {props.mainPicture && (
            <div className='col-12 col-lg-6 mt-10 mt-lg-0'>
              <div className='skewed-screenshot mb-8 mb-lg-0'>
                <img
                  src={props.mainPicture}
                  alt={props.mainPictureAlt}
                  loading='lazy'
                  className=' img-fluid '
                  width={props.mainPictureWidth}
                  height={props.mainPictureHeight}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = { cta: null, mainPicture: null, mainPictureAlt: null };

export default Hero;
