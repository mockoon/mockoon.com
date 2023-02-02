import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const meta = {
  title: "Learn with Mockoon's video tutorials",
  description:
    'Learn how to begin with Mockoon and create mock APIs by utilizing its features effectively.'
};

const VideoTutorials = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='mx-auto my-lg-3 col-12 col-xxl-10'>
              <Card
                data={{
                  title: 'Getting started with Mockoon',
                  description:
                    'Learn how to create your first mock API with Mockoon.',
                  imageSrc:
                    'https://img.youtube.com/vi/XKMCKwxMkWs/maxresdefault.jpg',
                  imageAlt: '',
                  links: [
                    {
                      src: 'https://youtu.be/XKMCKwxMkWs',
                      text: 'Watch on YouTube',
                      icon: 'icon-youtube'
                    }
                  ]
                }}
              />
              <Card
                data={{
                  title: 'Responses and rules',
                  description:
                    'Learn how to add more responses to your routes and serve them using the rules system.',
                  imageSrc: `https://img.youtube.com/vi/KaABR8umkiU/maxresdefault.jpg`,
                  imageAlt: '',
                  links: [
                    {
                      src: 'https://youtu.be/KaABR8umkiU',
                      text: 'Watch on YouTube',
                      icon: 'icon-youtube'
                    }
                  ]
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoTutorials;
