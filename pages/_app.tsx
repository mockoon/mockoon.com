import Script from 'next/script';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{' '}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { 'anonymize_ip': true });`
        }}
      ></Script>
    </>
  );
}
export default MyApp;
