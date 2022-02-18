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
}> = function ({ mockAPI }) {
  const meta = {
    title: `${
      mockAPI.title.includes('API') ? mockAPI.title : mockAPI.title + ' API'
    } mock sample for your project`,
    description: `Integrate with "${
      mockAPI.title.includes('API') ? mockAPI.title : mockAPI.title + ' API'
    }" from <strong>${
      mockAPI.provider
    }</strong> in no time with Mockoon's ready to use mock sample`
  };
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={meta.title}
        description={meta.description}
        ogType='article'
      />
      <Hero title={meta.title} subtitle={meta.description} />

      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />

      <div className='container'>
        <section className='py-8'>
          <div className='row justify-content-center gx-8 bg-white'>
            <div className='col-12 col-md-3 col-lg-3'>
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
                <div
                  className={`d-flex flex-column ${
                    mockAPI.logoSrc ? 'ms-4' : ''
                  }`}
                >
                  <h3 className={'fs-4 mb-0'}>{mockAPI.title}</h3>
                  <div className='text-muted fs-6'>
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
                  </div>
                </div>
              </div>
              {mockAPI.version && (
                <div className='fs-6'>
                  <span className='text-muted'>Version:</span> {mockAPI.version}
                </div>
              )}
              <div className='mt-8'>
                <div>
                  <MockSamplesOpenButton
                    href={`mockoon://load-environment?url=${mockAPI.environmentSrc}`}
                  />
                </div>
                <div>
                  <MockSamplesCLIButton
                    href={`clipboardcopy://mockoon-cli start --data ${mockAPI.environmentSrc}`}
                  />
                </div>
                <div>
                  <MockSamplesDownloadButton href={mockAPI.environmentSrc} />
                </div>
              </div>
              <div className='mt-8'>
                <MockSamplesHelpButton
                  onClick={() => {
                    setShowHelp(true);
                  }}
                />
              </div>
            </div>
            <div className='col-12 col-md-7 col-lg-7'>
              <div className='h-100 d-flex flex-column'>
                <div
                  className='flex-fill overflow-hidden text-gray-700'
                  dangerouslySetInnerHTML={{
                    __html: mockAPI.description
                  }}
                ></div>
              </div>
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
        </section>
      </div>
    </Layout>
  );
};

export default MockSamples;
