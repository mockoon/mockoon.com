import Link from 'next/link';
import { useState } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const meta = {
  title: "Learn with Mockoon's video tutorials",
  description:
    'Learn how to start working with Mockoon and create mock APIs in no time by making the most out of its features.'
};

const VideoTutorials = function () {
  const videos = [
    {
      id: 'XKMCKwxMkWs',
      name: 'Getting started with Mockoon',
      description:
        'Mockoon is a free cross-platform desktop application that takes API mocking to the next level. Mockoon offers a fast and easy-to-use interface and gives you complete control over your mock APIs with advanced functionality like a templating system, a proxy mode, and requests recording. This tutorial will show you how to install the desktop mocking application and set up your first mock API.',
      link: '/tutorials/getting-started/'
    },
    {
      id: 'HDGeslYAEAc',
      name: 'Responses and rules',
      description:
        'For each of Mockoon\'s API endpoint, you can define multiple responses with specific characteristics like status, body, and headers and serve them using a set of rules. In this tutorial, we will create a typical setup: one response returning a 200 status code and another one returning a 401 status code when the "Authorization" header is not present in the request.',
      link: '/tutorials/responses-and-rules/'
    },
    {
      id: 'UspMI8qLQUI',
      name: 'Partial API mock with proxy mode',
      description:
        "During the development of an application, you may use an API that is still under development. Rather than waiting for new API endpoints to be added and rely on your memory or documentation to continue your application development, you could use Mockoon to create a partial fake API. The idea is simple. Mockoon would serve the API endpoints you define while forwarding anything else to the URL of your choice. Let's dive through this with a simple example.",
      link: '/tutorials/partial-mocking-proxy/'
    }
  ];
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <Hero
        title={
          '📽️ Learn with Mockoon\'s <span class="text-primary">video tutorials</span>'
        }
        subtitle={meta.description}
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-3'>
              <aside className='flex-grow-1 sticky-top pt-4'>
                <ul className='card-list list mb-6'>
                  <h6 className='fw-bold text-uppercase mb-2'>
                    Tutorials list
                  </h6>
                  {videos.map((video, videoIndex) => {
                    return (
                      <li
                        key={`template${videoIndex}`}
                        className={`list-item py-1 ${
                          activeVideo.id === video.id ? 'active' : ''
                        }`}
                      >
                        <a
                          href='#'
                          className='list-link'
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveVideo(video);
                          }}
                        >
                          {videoIndex + 1}. {video.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </div>
            <div className='col-12 col-lg-9'>
              <h2>{activeVideo.name}</h2>
              <p className='mt-6'>{activeVideo.description}</p>
              <div className='ratio ratio-16x9 mb-4'>
                <iframe
                  style={{ border: 'none' }}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}`}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen={true}
                ></iframe>
              </div>

              <p>
                <Link
                  href={activeVideo.link}
                  className='btn btn-secondary-subtle'
                >
                  📃 Text version →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoTutorials;
