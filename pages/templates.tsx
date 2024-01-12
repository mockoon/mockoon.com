import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import CodeBlock from '../components/code-block';
import Hero from '../components/hero';
import Meta from '../components/meta';
import SidebarBanner from '../components/sidebar-banner';
import Layout from '../layout/layout';
import { Template } from '../models/templates.model';
import { getFreeTemplates } from '../utils/utils';

const meta = {
  title: "Mockoon's templates",
  description:
    'Make API development a breeze with our comprehensive library of JSON templates, designed to help you prototype and learn faster in Mockoon'
};

export async function getStaticProps() {
  const templates = await getFreeTemplates();

  return {
    props: {
      templates,
      randomIndex: Math.floor(Math.random() * templates.length)
    }
  };
}

const Templates: FunctionComponent<{
  templates: Template[];
  randomIndex: number;
}> = function ({ templates, randomIndex }) {
  const [activeTemplate, setActiveTemplate] = useState<Template>(
    templates[randomIndex]
  );

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title="📃 Mockoon <span class='text-primary'>templates</span>"
        subtitle='Make API development a breeze with our comprehensive library of JSON templates, designed to help you prototype and learn faster in Mockoon.'
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-3'>
              <aside className='flex-grow-1 sticky-top pt-4'>
                <ul className='card-list list mb-6'>
                  <h6 className='fw-bold text-uppercase mb-2'>Templates</h6>
                  {templates.map((template, templateIndex) => {
                    return (
                      <li
                        key={`template${templateIndex}`}
                        className={`list-item py-1 ${
                          activeTemplate?.id === template.id ? 'active' : ''
                        }`}
                      >
                        <a
                          href='#'
                          className='list-link'
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTemplate(template);
                          }}
                        >
                          {template.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <SidebarBanner
                  pro
                  title='Unlock more templates and generate your own'
                  text='With Mockoon Pro, you can unlock more templates and
                  generate your own using our AI assistant.'
                  link='/pro/'
                  ctaText='Discover Mockoon Pro →'
                />
              </aside>
            </div>
            <div className='col-12 col-lg-9'>
              <p className='mt-6'>
                <strong>Mockoon templates</strong> are JSON templates that can
                be used in Mockoon to quickly prototype your mock APIs. It's
                also useful for teaching and learning purposes. <br /> They use
                our powerful{' '}
                <Link href='/docs/latest/templating/overview/'>
                  templating system
                </Link>{' '}
                to allow you to customize the API responses to your needs. You
                can directly copy-paste them into the body of your responses or
                into the content of a{' '}
                <Link href='/docs/latest/data-buckets/overview/'>
                  data bucket
                </Link>{' '}
                to simulate a database.
              </p>
              <h4>
                List of{' '}
                <span className='text-lowercase'>{activeTemplate?.name}</span>:
              </h4>
              <pre>
                <CodeBlock
                  code={activeTemplate?.content || ''}
                  maxHeight='40vh'
                  language='typescript'
                />
              </pre>

              <p>
                Our templates can be found in the{' '}
                <Link href={'/download/'}>desktop application</Link>. To use
                one, click the "From template" button in the{' '}
                <strong>route creation menu</strong>. Then, select the template
                you want to use and create a new GET endpoint or a{' '}
                <Link href={'/docs/latest/api-endpoints/crud-routes/'}>
                  CRUD endpoint
                </Link>{' '}
                with a data bucket.
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
