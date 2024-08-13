import { FunctionComponent } from 'react';
import EmailForm from '../components/email-form';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Plans from '../components/plans';
import Layout from '../layout/layout';

const meta = {
  title: "Mockoon's Cloud plans pricing",
  description: ''
};

const Cloud: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='Supercharge your <span class="text-primary">API development</span>'
        subtitle='Collaborate with your team, keep your data in sync, and deploy your mock APIs with Mockoon Cloud'
        mainPicture='/images/cloud-hero.svg'
        mainPictureAlt='Mockoon logo in the cloud interconnected with other services'
        mainPictureWidth={1200}
        mainPictureHeight={783}
        mainPictureSkewed={false}
      />

      <Plans showTagline={true} />

      <section className='py-6 py-md-8' id='product-updates-subscribe'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold text-center mb-6'>
                Stay up-to-date with Mockoon Cloud feature releases
              </h2>
              <div className='row align-items-center text-lg-start text-center'>
                <div className='col-12 justify-content-end'>
                  <EmailForm formType='productUpdates' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cloud;
