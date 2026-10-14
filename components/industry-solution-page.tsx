import Layout from '../layout/layout';
import AlternatedFeatures from './alternated-features';
import CompanyLogos from './company-logos';
import Hero from './hero';
import LandingCta from './landing-cta';
import Meta from './meta';
import SocialProof from './social-proof';

type IndustrySolutionPageData = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroImage: string;
  heroImageAlt: string;
  industry: string;
  benefits: { title: string; description: string; icon: string }[];
  comparisonTitle: string;
  comparisonDescription: string;
  withoutTitle: string;
  without: string[];
  withTitle: string;
  with: string[];
  features: {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
  }[];
};

export default function IndustrySolutionPage({
  data
}: {
  data: IndustrySolutionPageData;
}) {
  return (
    <Layout footerBanner='download'>
      <Meta title={data.metaTitle} description={data.metaDescription} />

      <Hero
        title={data.heroTitle}
        subtitle={data.metaDescription}
        mainPicture={data.heroImage}
        mainPictureAlt={data.heroImageAlt}
        mainPictureSkewed={false}
      >
        <SocialProof />
      </Hero>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <CompanyLogos />
      </section>

      <section className='py-6 py-md-8'>
        <div className='container'>
          <h2 className='fw-bold position-relative my-8 text-center'>
            Why teams choose Mockoon for {data.industry} APIs
          </h2>
          <div className='row g-6 justify-content-center'>
            {data.benefits.map((benefit) => (
              <div key={benefit.title} className='col-lg-6 col-xl-3'>
                <div className='text-center'>
                  <div className='icon-wrapper mb-3'>
                    <i
                      className={`${benefit.icon} text-primary`}
                      style={{ fontSize: '2.5rem' }}
                    ></i>
                  </div>
                  <h4 className='fw-bold mb-2'>{benefit.title}</h4>
                  <p className='text-muted mb-0'>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-bold mb-4'>{data.comparisonTitle}</h2>
              <p className='text-muted mb-6'>{data.comparisonDescription}</p>
            </div>
          </div>

          <div className='row g-6 justify-content-around'>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-danger mb-4'>
                  <i className='icon-close me-2'></i>
                  {data.withoutTitle}
                </h5>
                <ul className='list-unstyled'>
                  {data.without.map((item) => (
                    <li key={item} className='d-flex mb-3'>
                      <div className='badge badge-rounded-circle text-bg-danger-subtle mt-1 me-3'>
                        <i className='icon icon-remove'></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='h-100'>
                <h5 className='text-success mb-4'>
                  <i className='icon-check me-2'></i>
                  {data.withTitle}
                </h5>
                <ul className='list-unstyled'>
                  {data.with.map((item) => (
                    <li key={item} className='d-flex mb-3'>
                      <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-3'>
                        <i className='icon icon-add'></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
        <div className='container text-lg-start text-center'>
          <AlternatedFeatures features={data.features} imgSize={[800, 454]} />
        </div>
      </section>

      <LandingCta />
    </Layout>
  );
}
