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
          <iframe
            src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1IkirOnIXpB7IEulkQAvMeg2a8farqppiaCuFGXHGOo0TNZB_YKpZ4kpXCThRUNpth2PunVtee?gv=true'
            style={{ border: 0 }}
            width='100%'
            height='1200'
            frameBorder='0'
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default RequestDemo;
