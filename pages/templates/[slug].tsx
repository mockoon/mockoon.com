import { FunctionComponent } from 'react';
import CodeBlock from '../../components/code-block';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import TemplatesMenu from '../../components/templates-menu';
import { templatesDesc } from '../../data/templates-desc';
import Layout from '../../layout/layout';
import { Template, TemplateLight } from '../../models/templates.model';
import { getTemplate, getTemplatesList } from '../../utils/utils';

const meta = {
  title: "Mockoon's pre-generated JSON templates",
  description:
    'Make API development a breeze with our comprehensive library of JSON templates, designed to help you prototype and learn faster in Mockoon'
};

export async function getStaticProps({ params }) {
  const template = await getTemplate(params.slug);
  const templates = await getTemplatesList();

  return {
    props: {
      templates,
      template
    }
  };
}
export async function getStaticPaths() {
  const templates = await getTemplatesList();

  return {
    paths: templates.map((template) => {
      return {
        params: { slug: template.slug }
      };
    }),
    fallback: false
  };
}

const SingleTemplate: FunctionComponent<{
  templates: TemplateLight[];
  template: Template;
}> = function ({ templates, template }) {
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
              <h3 className='fw-medium'>
                {templatesDesc.find((desc) => desc.id === template.id)?.title}
              </h3>

              <pre>
                <CodeBlock
                  code={template?.content || ''}
                  maxHeight='40vh'
                  language='typescript'
                />
              </pre>

              <p>
                {templatesDesc.find((desc) => desc.id === template.id)?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleTemplate;
