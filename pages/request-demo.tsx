import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const RequestDemo: FunctionComponent = function () {
  return (
    <Layout footerBanner='contact'>
      <Meta
        title='Request a Mockoon Cloud demo'
        description='Book a demo with our team to see how Mockoon and our Cloud can help you streamline your API development workflows'
      />

      <Hero
        title='Request a <span class="text-primary">demo</span>'
        subtitle='Book a demo with our team to see how Mockoon and our Cloud can help you streamline your API development workflows'
      />
      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p>
                <strong>Book a Free 30-Minute Demo with Our Founder</strong>
              </p>
              <p>Join our founder for a personalized session to: </p>
              <ul>
                <li>
                  <strong>Identify your API development challenges</strong> and
                  explore how Mockoon Cloud can solve them.
                </li>
                <li>
                  <strong>
                    Get a hands-on demo of Mockoon Cloud's features
                  </strong>
                  , including real-time team collaboration and cloud
                  deployments.
                </li>
                <li>
                  <strong>
                    Understand best practices for using Mockoon Cloud
                  </strong>{' '}
                  with your team and scaling your projects.
                </li>
                <li>
                  <strong>Ask any questions you have about features</strong>,
                  integrations, and how Mockoon Cloud can support your specific
                  needs.
                </li>
              </ul>
            </div>
          </div>
          <iframe
            src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1IkirOnIXpB7IEulkQAvMeg2a8farqppiaCuFGXHGOo0TNZB_YKpZ4kpXCThRUNpth2PunVtee?gv=true'
            style={{ border: 0 }}
            width='100%'
            height='1500'
            frameBorder='0'
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default RequestDemo;
