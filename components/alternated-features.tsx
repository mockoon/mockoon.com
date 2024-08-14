import { FunctionComponent } from 'react';

const AlternatedFeatures: FunctionComponent<{
  features: {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    cta?: string;
    ctaLink?: string;
  }[];
  // provide the images size in pixels when known
  imgSize?: [number, number];
  // provide a custom class name for the images (like 'w-lg-50')
  imgClassName?: string;
}> = function ({ features, imgSize, imgClassName }) {
  return (
    <>
      {features.map((feature, featureIndex) => {
        return (
          <div
            className='row py-5 py-lg-8 align-items-center justify-content-between'
            key={`feature${featureIndex}`}
          >
            <div
              className={`col-12 col-lg-6 pb-sm-10 pb-lg-0 ${
                featureIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
              }`}
            >
              <h3
                className='h2 fw-bold'
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>

              <p className='fs-lg text-gray-700'>{feature.description}</p>
              <div>
                {feature.cta && (
                  <a
                    className='btn btn-secondary-subtle btn-xs mt-5'
                    href={feature.ctaLink}
                  >
                    {feature.cta}
                    <i className='icon-arrow_forward ms-2'></i>
                  </a>
                )}
              </div>
            </div>
            <div
              className={`col-12 col-lg-6 ${
                featureIndex % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
              }`}
            >
              <div className='mb-6 mb-lg-0 text-center'>
                <img
                  src={feature.imgSrc}
                  alt={feature.imgAlt}
                  className={`img-fluid p-2 ${imgClassName}`}
                  width={imgSize?.[0]}
                  height={imgSize?.[1]}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AlternatedFeatures;
