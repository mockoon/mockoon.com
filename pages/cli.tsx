import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import SimpleCards from '../components/simple-cards';
import Terminal from '../components/terminal';
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
      'Also available as a Docker image and soon as a Github Action or on your favorite CI platforms!',
    disabledLink: true,
    linkText: 'Stay tuned !'
  }
];

const Cli: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Take Mockoon to the command line'
        description='Mockoon CLI takes Mockoon where it has never been before: servers, CI environments, etc. Lightweight and fast.'
      />
      <Hero
        title="Take Mockoon to the <span class='text-primary'>command line</span>"
        subtitle='Mockoon CLI takes Mockoon where it has never been before. Lightweight and fast.'
        cta={[
          {
            text: 'Installation instructions →',
            link: 'https://github.com/mockoon/cli#installation'
          }
        ]}
        mainPicture='/images/cli-screenshot.png'
        mainPictureAlt='Mockoon CLI screenshot'
      />
      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row py-5'>
            <div className='text-center'>
              <h2>
                Mockoon's perfect complement for all your headless and automated
                environments.
              </h2>
            </div>
            <SimpleCards items={features} />
          </div>
          <div className='row py-5'>
            <div className='col-md-6'>
              <h3 className='text-center'>NPM package quick start</h3>
              <Terminal
                lines={[
                  'npm install -g @mockoon/cli',
                  'mockoon-cli start --data ./export-file.json'
                ]}
              />
            </div>
            <div className='col-md-6'>
              <h3 className='text-center'>Docker image Quick start</h3>
              <Terminal
                lines={[
                  'docker run -d --mount type=bind,source=/export-file.json,target=/data,readonly -p 3000:3000 mockoon/cli:latest -d data -i 0 -p 3000'
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cli;
