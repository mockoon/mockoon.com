import Link from 'next/link';
import { FunctionComponent } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import TemplatesMenu from '../../components/templates-menu';
import Layout from '../../layout/layout';
import { TemplateLight } from '../../models/templates.model';
import { getTemplatesList } from '../../utils/utils';

const meta = {
  title: "Mockoon's pre-generated JSON templates",
  description:
    'Make API development a breeze with our comprehensive library of JSON templates, designed to help you prototype and learn faster in Mockoon'
};

export async function getStaticProps() {
  const templates = await getTemplatesList();

  return {
    props: {
      templates
    }
  };
}

const Templates: FunctionComponent<{
  templates: TemplateLight[];
}> = function ({ templates }) {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="📃 Mockoon <span class='text-primary'>pre-generated templates</span>"
        subtitle='Make API development a breeze with our comprehensive library of JSON templates, designed to help you prototype and learn faster in Mockoon.'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-3'>
              <TemplatesMenu templates={templates} />
            </div>
            <div className='col-12 col-lg-9'>
              <p>
                <strong>Mockoon pre-generated templates</strong> are JSON
                templates that can be used in Mockoon to quickly prototype your
                mock APIs. It's also useful for teaching and learning purposes.{' '}
                <br /> They use our powerful{' '}
                <Link href='/docs/latest/templating/overview/'>
                  templating system
                </Link>{' '}
                to allow you to customize the API responses to your needs. You
                can directly copy-paste them into the{' '}
                <Link href='/docs/latest/response-configuration/response-body/'>
                  body of your responses
                </Link>{' '}
                or into the content of a{' '}
                <Link href='/docs/latest/data-buckets/overview/'>
                  data bucket
                </Link>{' '}
                to simulate a database.
              </p>

              <p>
                Our templates can be found here or in the{' '}
                <Link href={'/download/'}>desktop application</Link>. To use
                one, click the "From template" button in the{' '}
                <strong>route creation menu</strong>. Then, select the template
                you want to use and create a new GET endpoint or a{' '}
                <Link href={'/docs/latest/api-endpoints/crud-routes/'}>
                  CRUD endpoint
                </Link>{' '}
                with a data bucket. <br />
                Learn more in our{' '}
                <Link
                  href={
                    '/cloud/docs/templates-and-ai-assistant/#use-the-pre-generated-templates'
                  }
                >
                  documentation
                </Link>
                .
              </p>
              <p>
                <img
                  src='/images/templates/use-templates-mockoon-desktop.gif'
                  className='img-fluid mx-auto d-block mt-8 rounded'
                  alt='select from template the route creation menu to create an endpoint from a template'
                  width='798'
                  height='756'
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Templates;
