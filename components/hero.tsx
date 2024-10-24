import { Fragment, FunctionComponent } from 'react';

const Hero: FunctionComponent<{
  title?: string;
  subtitle?: string;
  cta?: { text: string; link: string; blank?: boolean; subtitle?: string }[];
  ctaContent?: any;
  mainPicture?: string;
  mainPictureAlt?: string;
  mainPictureWidth?: number;
  mainPictureHeight?: number;
  mainPictureSkewed?: boolean;
  children?: React.ReactNode;
}> = function ({
  title,
  subtitle,
  cta,
  ctaContent,
  mainPicture,
  mainPictureAlt,
  mainPictureWidth,
  mainPictureHeight,
  mainPictureSkewed,
  children
}) {
  mainPictureSkewed = mainPictureSkewed ?? true;

  return (
    <section
      className={`position-relative ${
        mainPicture ? 'py-lg-10 py-5 mb-4' : 'pt-8 pb-4'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={`col-12 ${
              mainPicture ? 'col-lg-6' : 'col-lg-8 mx-auto text-center'
            }`}
          >
            {title && (
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className={`display-4 text-center fw-medium ${
                  mainPicture ? 'text-lg-start' : ''
                } `}
              ></h1>
            )}
            {subtitle && (
              <p
                className={`lead ${
                  mainPicture ? 'text-lg-start' : ''
                }  text-center text-gray-700 mb-6 mb-lg-8`}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              ></p>
            )}
            {cta && (
              <div
                className={`hero-cta ${
                  mainPicture ? 'text-lg-start' : ''
                } text-center`}
              >
                {cta.map((cta, index) => {
                  return (
                    <Fragment key={index}>
                      <a
                        href={cta.link}
                        target={cta.blank ? '_blank' : undefined}
                        className='me-2'
                      >
                        <button
                          className={`btn btn-primary${
                            index > 0 ? '-subtle' : ''
                          } lift`}
                        >
                          <span>
                            {cta.text}{' '}
                            {cta.link.includes('download') && (
                              <i className='icon-download ps-2'></i>
                            )}
                          </span>
                        </button>
                      </a>
                      {cta.subtitle && (
                        <p className='m-0 text-gray-700 fst-italic'>
                          <small>{cta.subtitle}</small>
                        </p>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            )}
            {ctaContent}
            <div className='mt-8'>{children}</div>
          </div>
          {mainPicture && (
            <div className='col-12 col-lg-6 mt-10 mt-lg-0'>
              <div
                className={`${
                  mainPictureSkewed ? 'skewed-screenshot' : ''
                } mb-8 mb-lg-0`}
              >
                <img
                  src={mainPicture}
                  alt={mainPictureAlt}
                  loading='lazy'
                  className=' img-fluid '
                  width={mainPictureWidth}
                  height={mainPictureHeight}
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
