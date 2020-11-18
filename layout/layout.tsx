import Head from 'next/head';
import React, { Fragment } from 'react';
import Footer from '../components/footer';

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
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

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', 'auto');ga('send', 'pageview');`
            }}
          ></script>
        </Head>
        {this.props.children}
        <Footer />
        <script src='https://buttons.github.io/buttons.js' defer />
      </Fragment>
    );
  }
}

export default Layout;
