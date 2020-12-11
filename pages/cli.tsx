import { FunctionComponent } from 'react';
import ContactBanner from '../components/contact-banner';
import Hero from '../components/hero';
import Meta from '../components/meta';
import SimpleCards from '../components/simple-cards';
import Layout from '../layout/layout';
import { ItemCard } from '../models/common.model';

const features: ItemCard = [
  {
    title: "Supports all Mockoon's features",
    description:
      "The CLI supports all of Mockoon's features: dynamic templating, response rules, proxy mode, etc.",
    linkText: 'View all features',
    link: '/features/'
  },
  {
    title: 'Lightweight and fast',
    description:
      'Deploy light and fast mocks in your CI environment with a simple and easy to use NPM package.',
    link: 'https://github.com/mockoon/cli#installation',
    linkText: 'How to use it'
  },
  {
    title: 'Run your mocks everywhere',
    description:
      'Soon available as Docker file, Github Action and on your favorite CI platforms!',
    disabledLink: true,
    linkText: 'Stay tuned !'
  }
];

const SponsorUs: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Take Mockoon to the command line'
        description='Mockoon CLI takes Mockoon where it has never been before: servers, CI environments, etc. Lightweight and fast.'
      />

      <Hero
        title='Take Mockoon to the command line'
        subtitle='Mockoon CLI takes Mockoon where it has never been before. Lightweight and fast.'
        cta={{
          text: 'Installation instructions →',
          link: 'https://github.com/mockoon/cli#installation'
        }}
        mainPicture='/images/cli-screenshot.png'
      />

      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <div className='section'>
              <div className='content'>
                <h3 className='mb-6 is-size-4'>
                  Mockoon's perfect complement for all your headless and
                  automated environments.
                </h3>
              </div>
              <SimpleCards items={features} />
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </Layout>
  );
};

export default SponsorUs;

/**
 *


 I'm Guillaume. Thank you for considering supporting my open-source software work through GitHub Sponsors.

I am a passionate full-stack web developer currently working on Mockoon in my spare time.

Mockoon is the easiest and quickest way to run mock APIs locally. No remote deployment or account required. And it's open-source!
I want Mockoon to be the best mocking tool out there! But this requires time. A lot of time.
By sponsoring me you can show your appreciation for all this hard work and also allow me to dedicate more time to this project in the future.

Thank you for considering support!
 */
