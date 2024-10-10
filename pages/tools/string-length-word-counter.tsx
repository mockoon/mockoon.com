import { FunctionComponent, useState } from 'react';
import TextEditor from '../../components/editors/text-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const StringLengthCounter: FunctionComponent = function () {
  const [stats, setStats] = useState({
    length: 14,
    words: 2,
    lines: 1
  });

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'String length and word counter'}
        description='Count the number of characters, words, and lines in your text with this online tool. Useful for social media posts, blog articles, or academic papers.'
      />
      <Hero
        title='<span class="text-primary">String length</span> and word counter'
        subtitle='Count the number of characters, words, and lines in your text with this online tool.'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='d-flex mb-4 justify-content-center'>
            <div className='pe-5'>
              <p className='text-gray-700 mb-0'>Length</p>
              <h3 className='mb-0'>{stats.length}</h3>
            </div>
            <div className='border-start border-gray-300'></div>
            <div className='px-5'>
              <p className='text-gray-700 mb-0'>Words</p>{' '}
              <h3 className='mb-0'>{stats.words}</h3>
            </div>
            <div className='border-start border-gray-300'></div>
            <div className='ps-5'>
              <p className='text-gray-700 mb-0'>Lines</p>{' '}
              <h3 className='mb-0'>{stats.lines}</h3>
            </div>
          </div>
          <div className='code-editor-container'>
            <TextEditor
              value={'Example string'}
              onValueChange={(value) => {
                setStats({
                  length: value.length,
                  words: value.trim().split(/\s+/).length,
                  lines: value.split(/\n|\r\n/).length
                });
              }}
            />
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
                This tool allows you to count the number of characters, words,
                and lines in your text. It is useful for checking the length of
                your content, such as for social media posts, blog articles, or
                academic papers. It also helps you to identify the number of
                words and lines in your text, which can be useful for writing
                essays, reports, or other documents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StringLengthCounter;
