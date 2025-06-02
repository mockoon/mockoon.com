import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const SlugGenerator: FunctionComponent = function () {
  const [text, setText] = useState('Mockoon is an awesome API mocking tool!');
  const [slug, setSlug] = useState('mockoon-is-an-awesome-api-mocking-tool');

  const slugify = (text: string) => {
    try {
      return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .trim();
    } catch (error) {}
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online slug generator'}
        description='Transform your text into a URL-friendly slug for your website, blog, or application using our online slug generator.'
      />
      <Hero
        title='Online <span class="text-primary">slug generator</span>'
        subtitle='Transform your text into a URL-friendly slug for your website, blog, or application using our online slug generator.'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className=''>
              <label htmlFor='text'>Text</label>
              <input
                type='text'
                id='text'
                className='form-control border-secondary'
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                  setSlug(slugify(event.target.value));
                }}
              />
            </div>

            <div className='code-editor-sync mx-6 fs-1 text-gray-600 align-self-end text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='d-flex'>
              <div className='flex-grow-1'>
                <label htmlFor='slug'>Slug</label>
                <input
                  type='text'
                  id='slug'
                  className='form-control border-secondary'
                  defaultValue={slug}
                />
              </div>
              <div className='align-self-end'>
                <button
                  type='button'
                  className='btn btn-primary-subtle ms-3'
                  onClick={() => {
                    navigator.clipboard.writeText(slug);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='mt-6 fw-medium'>About this tool</h3>
              <p>
                This tool allows you to generate a{' '}
                <strong>URL-friendly slug</strong> from your text.
              </p>
              <p>
                Example: <code>Mockoon is an awesome API mocking tool!</code>{' '}
                becomes <code>mockoon-is-an-awesome-api-mocking-tool</code>.
              </p>
              <h3 className='mt-6 fw-medium'>About slugs</h3>
              <p>
                A slug is a part of a URL that{' '}
                <strong>identifies a particular page</strong> on a website in a
                form readable by users. It is typically used in blog posts,
                articles, and other web content to create clean and descriptive
                URLs.
              </p>
              <p>
                Slugs usually follow a <strong>specific format</strong>:
              </p>
              <ul>
                <li>Lowercase letters</li>
                <li>Hyphens (-) to separate words instead of spaces</li>
                <li>No special characters, accents, or white spaces</li>
              </ul>
              <h3 className='mt-6 fw-medium'>Slugs and SEO</h3>
              <p>
                <strong>Slugs are important for SEO</strong> (Search Engine
                Optimization) because they permanently identify a page's content
                and help search engines understand the topic of the page. A
                well-structured slug can improve the visibility of your content
                in search results.
              </p>
              <p>
                Here are some tips for{' '}
                <strong>optimizing your slugs for SEO</strong>:
              </p>
              <ul>
                <li>Keep it short and descriptive</li>
                <li>Include relevant keywords describing the content</li>
                <li>Avoid using stop words (e.g., "and", "the", "of")</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SlugGenerator;
