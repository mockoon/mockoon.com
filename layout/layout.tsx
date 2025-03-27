import Head from 'next/head';
import { Fragment, FunctionComponent } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { FooterCTA } from '../models/common.model';

const Layout: FunctionComponent<{
  footerBanner: FooterCTA;
  children: React.ReactNode;
  minimal?: boolean;
}> = function ({ footerBanner, children, minimal }) {
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='Mockoon' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      {!minimal && <Nav />}

      {children}
      {!minimal && <Footer banner={footerBanner} />}
    </Fragment>
  );
};

export default Layout;
