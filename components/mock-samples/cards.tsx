import Link from 'next/link';
import { FunctionComponent } from 'react';
import { MockAPI } from '../../models/common.model';
import ConditionalWrapper from '../conditional-wrapper';

const MockSampleCards: FunctionComponent<{
  mockAPIsList: MockAPI[];
  ratioPerItemXl: number;
}> = function ({ mockAPIsList, ratioPerItemXl }) {
  return (
    <>
      {mockAPIsList.map((mockAPI, mockAPIIndex) => {
        return (
          <div
            key={`mockAPI${mockAPIIndex}`}
            className={`mx-auto my-lg-3 col-12 col-xl-${ratioPerItemXl} d-flex`}
            style={{ minHeight: '300px', maxHeight: '350px' }}
          >
            <div className='card card-border shadow-light mb-6'>
              <div className='card-body h-100 d-flex flex-column'>
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
                    <div className='text-gray-700 fs-6'>
                      <ConditionalWrapper
                        condition={!!mockAPI.externalLink}
                        wrapper={(children) => (
                          <Link
                            href={mockAPI.externalLink}
                            target={'_blank'}
                            rel='noopener'
                          >
                            <>{children}</>
                          </Link>
                        )}
                      >
                        {mockAPI.provider}
                      </ConditionalWrapper>
                    </div>
                  </div>
                </div>
                <div
                  className='flex-fill overflow-hidden text-gray-700 ellipsis'
                  dangerouslySetInnerHTML={{
                    __html: mockAPI.description
                  }}
                ></div>
                <div className='text-center'>
                  <hr />
                  <Link
                    href={`/mock-samples/${mockAPI.slug}/`}
                    className='btn-xs btn btn-primary-subtle '
                  >
                    Use API →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MockSampleCards;
