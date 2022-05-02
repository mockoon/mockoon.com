import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import ConditionalWrapper from '../../components/conditional-wrapper';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import {
  MockSamplesCLIButton,
  MockSamplesDownloadButton,
  MockSamplesHelpButton,
  MockSamplesOpenButton
} from '../../components/mock-samples/buttons';
import HelpModal from '../../components/mock-samples/help-modal';
import Layout from '../../layout/layout';
import { MockAPI } from '../../models/common.model';
import {
  getMockSamplesSlugPaths,
  getMockSamplesSlugProps
} from '../../utils/mock-samples-static';

export async function getStaticProps(context: GetServerSidePropsContext) {
  return await getMockSamplesSlugProps(context);
}

export async function getStaticPaths() {
  return await getMockSamplesSlugPaths();
}

const MockSamples: FunctionComponent<{
  mockAPI: MockAPI;
  intro: string;
}> = function ({ mockAPI, intro }) {
  const seoTitle = mockAPI.title.includes('API')
    ? mockAPI.title
    : mockAPI.title + ' API';
  const meta = {
    title: `Mock sample for your project: ${seoTitle} `,
    description: `Integrate with "${seoTitle}" from ${mockAPI.provider} in no time with Mockoon's ready to use mock sample`
  };
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={meta.title}
        description={meta.description}
        url={`/mock-samples/${mockAPI.slug}/`}
        ogType='article'
      />
      <Hero title={meta.title} subtitle={meta.description} />

      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />

      <section className='py-8 py-md-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md'>
              <div className='d-flex align-items-center mb-4'>
                {mockAPI.logoSrc && (
                  <div style={{ maxHeight: '50px', maxWidth: '25%' }}>
                    <img
                      src={mockAPI.logoSrc}
                      alt=''
                      className='img-fluid'
                      style={{
                        maxHeight: '50px',
                        backgroundColor: mockAPI.logoBg ? mockAPI.logoBg : ''
                      }}
                    />
                  </div>
                )}

                <h1
                  className={`display-4 mb-0 ${mockAPI.logoSrc ? 'ms-4' : ''}`}
                >
                  {mockAPI.title}
                </h1>
              </div>

              <p className='fs-lg text-gray-700 mb-5 mb-md-0'>
                <ConditionalWrapper
                  condition={!!mockAPI.externalLink}
                  wrapper={(children) => (
                    <Link href={mockAPI.externalLink}>
                      <a target={'_blank'} rel='noopener'>
                        {children}
                      </a>
                    </Link>
                  )}
                >
                  {mockAPI.provider}
                </ConditionalWrapper>
              </p>
            </div>
            <div className='col-auto'>
              <p className='fs-sm text-gray-700 mb-5 mb-md-0'>
                {mockAPI.version && (
                  <span className='text-muted'>Version: {mockAPI.version}</span>
                )}
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <hr className='my-6 my-md-8 border-gray-300' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4 order-md-2 mb-4 mb-md-0'>
              <div className='card shadow-lg'>
                <div className='card-body'>
                  <h4 className='mb-6'>Use this API in your project</h4>

                  <div className='ms-4'>
                    <MockSamplesOpenButton
                      href={`mockoon://load-environment?url=${mockAPI.environmentSrc}`}
                    />
                  </div>
                  <div className='ms-4'>
                    <MockSamplesCLIButton
                      href={`clipboardcopy://mockoon-cli start --data ${mockAPI.environmentSrc}`}
                    />
                  </div>
                  <div className='ms-4'>
                    <MockSamplesDownloadButton href={mockAPI.environmentSrc} />
                  </div>

                  <div className='mt-6'>
                    <MockSamplesHelpButton
                      onClick={() => {
                        setShowHelp(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-8 order-md-1'>
              <p
                className='text-gray-800 mb-6 mb-md-8'
                dangerouslySetInnerHTML={{
                  __html: intro
                }}
              ></p>
              <h3>Official description</h3>
              <p
                className='text-gray-800 mb-6 mb-md-8'
                dangerouslySetInnerHTML={{
                  __html: mockAPI.description
                }}
              ></p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='mt-8 text-center'>
                <Link href='/mock-samples/category/all/'>
                  <a className='btn btn-sm btn-secondary-soft'>
                    ⬅ Back to the list of mock samples
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MockSamples;
