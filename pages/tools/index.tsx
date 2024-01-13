import { FunctionComponent } from 'react';
import Card from '../../components/card';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const tools = [
  {
    title: 'JSON validator',
    description: 'Validate your JSON online and get detailed error messages',
    links: [{ src: '/tools/json-validator/', text: 'Validate' }],
    imageSrc: '/images/illustrations/json-valid.svg'
  },
  {
    title: 'XML validator',
    description: 'Validate your XML online and get detailed error messages',
    links: [{ src: '/tools/xml-validator/', text: 'Validate' }],
    imageSrc: '/images/illustrations/xml-valid.svg'
  },
  {
    title: 'XML to JSON converter',
    description:
      'Convert your XML data to a JSON object and verify its validity',
    links: [{ src: '/tools/xml-to-json', text: 'Convert' }],
    imageSrc: '/images/illustrations/xml-to-json.svg'
  }
];

const Tools: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Mockoon useful tools'}
        description='Discover our set of useful tools to help you with your API development and testing: XML to JSON converter, JSON validator, XML validator'
      />

      <Hero
        title='🛠️ Mockoon <span class="text-primary">useful tools</span>'
        subtitle='Discover our set of useful tools to help you with your API development and testing'
      />

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            {tools.map((tool, toolIndex) => (
              <div key={`tool${toolIndex}`} className='col-12 col-lg-4 d-flex'>
                <Card
                  data={{
                    ...tool
                  }}
                  vertical
                  cover={false}
                  border
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
