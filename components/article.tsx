import { Fragment, FunctionComponent, useState } from 'react';
import { authors } from '../constants/authors';
import { ArticleData } from '../models/common.model';
import Author from './author';
import Markdown from './markdown';
import {
  MockSamplesCLIButton,
  MockSamplesDownloadButton,
  MockSamplesOpenButton
} from './mock-samples/buttons';
import Tags from './tags';

const Article: FunctionComponent<{
  slug: string;
  path: string;
  articleData: ArticleData;
  articleBody: string;
  tags?: string[];
  author?: keyof typeof authors;
}> = function (props) {
  const [showHelp, setShowHelp] = useState<boolean>(false);

  return (
    <Fragment>
      {props.articleData.header && (
        <section className='article-header text-gray-300 pt-7 py-5'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='text-center col-12 col-lg-4'>
                <img
                  src={`/images/external/${props.articleData.header.image}`}
                  alt={`${props.articleData.header.imageAlt}`}
                />
              </div>
              <div className='col-12 col-lg-8 text-center'>
                <div className='row pt-5 pt-lg-0'>
                  <p className='col-12 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>About</span>
                    <span className='mt-n1'>
                      {props.articleData.header.overview}
                    </span>
                  </p>
                </div>
                <div className='d-flex flex-row my-6'>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Industry</span>
                    <span className='mt-n1'>
                      {props.articleData.header.industry}
                    </span>
                  </p>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Employees</span>
                    <span className='mt-n1'>
                      {props.articleData.header.employees}
                    </span>
                  </p>
                  <p className='col-4 mb-0 d-flex flex-column'>
                    <span className='text-uppercase text-white'>Website</span>
                    <span className='mt-n1'>
                      <a
                        href={props.articleData.header.link}
                        rel='noopener'
                        target='_blank'
                      >
                        {props.articleData.header.linkAnchor}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className='container'>
        {props.articleData.image && !props.articleData.header && (
          <div className='pt-5 pb-2 col-12 d-flex justify-content-center'>
            <div className='mb-8 mb-lg-0'>
              <img
                src={`/images/${props.path}/${props.articleData.image}`}
                alt={props.articleData.imageAlt}
                loading='lazy'
                className='screenshot img-fluid'
                width={props.articleData.imageWidth}
                height={props.articleData.imageHeight}
              />
            </div>
          </div>
        )}

        <section className='pt-8'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-lg-10 col-xl-10 border-bottom pb-4'>
              <h1 className='display-4 text-center'>
                {props.articleData.title}
              </h1>

              <p className='lead mb-4 text-center text-gray-700'>
                {props.articleData.excerpt}
              </p>

              <div className='d-flex align-items-center justify-content-center'>
                {props.author && <Author author={props.author} />}
                {props.articleData.date && (
                  <div
                    className={
                      'd-flex justify-content-center align-items-center'
                    }
                  >
                    <div className='mb-2 mb-lg-0'>
                      <span className='px-4 fw-bold'>|</span>{' '}
                      <time
                        className='fs-sm text-gray-700'
                        dateTime={props.articleData.date}
                      >
                        Published on {props.articleData.date}
                      </time>
                    </div>
                  </div>
                )}
              </div>
              {props.tags?.length > 0 && (
                <div className='text-center mt-2'>
                  <Tags tags={props.tags} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className='pt-6 pt-lg-8 pb-8'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-10'>
              <Markdown body={props.articleBody} />
            </div>
          </div>
          {props.articleData.mockApiFile && (
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-10 col-xl-10'>
                <div className='mt-8 p-6 border-top border-bottom bg-gray-100'>
                  <h2
                    id='download-the-example-environment'
                    className='fw-medium position-relative'
                  >
                    <i className='icon-download me-2'></i>Download the example
                    environment
                  </h2>
                  <p>
                    You can download the example environment file created for
                    this tutorial or directly open it in Mockoon desktop or CLI:
                  </p>
                  <div>
                    <MockSamplesOpenButton
                      className='me-2'
                      href={`mockoon://load-environment?url=${props.articleData.mockApiFile}`}
                    />
                    <MockSamplesCLIButton
                      className='me-2'
                      href={`clipboardcopy://mockoon-cli start --data ${props.articleData.mockApiFile}`}
                    />
                    <MockSamplesDownloadButton
                      className='me-2'
                      href={props.articleData.mockApiFile}
                    />
                  </div>
                  <div className='mt-4'>
                    <button
                      className='btn btn-link p-0'
                      onClick={() => {
                        setShowHelp(!showHelp);
                      }}
                    >
                      📘 How to use our mock API samples?
                    </button>
                    {showHelp && (
                      <div className='mt-4'>
                        <div className='pb-4'>
                          You have three choices to use our example environment:
                        </div>
                        <p>
                          <strong>Download the JSON</strong>: Download the JSON
                          file manually and open it with the desktop application
                          or{' '}
                          <a href='/tutorials/run-mock-api-anywhere-cli/'>
                            run it
                          </a>{' '}
                          with the CLI.
                        </p>

                        <p>
                          <strong>Open in the desktop application</strong>: Open
                          it automatically in Mockoon desktop if you already{' '}
                          <a href='/download/'>installed the application</a>.
                          You will be prompted by the application to save the
                          mock API.
                        </p>

                        <p>
                          <strong>Copy the command</strong>: Copy the command to
                          run it using the CLI. Make sure that you{' '}
                          <a href='/cli/'>installed the CLI</a> on your machine
                          before running this command.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default Article;
