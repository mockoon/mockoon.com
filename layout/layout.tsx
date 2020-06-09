import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer';

class Layout extends React.Component {
  componentDidMount() {
    // add AWS script
    const awsScript = document.createElement('script');
    awsScript.src =
      '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    awsScript.async = true;
    awsScript.defer = true;
    document.body.appendChild(awsScript);

    // add Github script
    const githubScript = document.createElement('script');
    githubScript.src = 'https://buttons.github.io/buttons.js';
    githubScript.async = true;
    githubScript.defer = true;
    document.body.appendChild(githubScript);

    // add GA script
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-7759211-14', 'auto');ga('send', 'pageview');`;
    gaScript.async = true;
    gaScript.defer = true;
    document.head.appendChild(gaScript);

    // add Twitter script
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    twitterScript.defer = true;
    document.body.appendChild(twitterScript);
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#252830' />
          <meta name='theme-color' content='#ffffff' />
          {/* Buy me a coffee font */}
          <link
            href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
            rel='stylesheet'
          />
          {/* Mailchimp newsletter form CSS */}
          <link
            rel='stylesheet'
            href='https://cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css'
          />
        </Head>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
