import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import Script from 'next/script';
import '../styles/style.scss';

const queryClient = new QueryClient();

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
});

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(
    getAuth(),
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST
  );
}

export { firebaseApp };

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Script>{`if(document.location.host.indexOf('mockoon.xyz') > -1){document.location.replace('https://mockoon.com')}`}</Script>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { 'anonymize_ip': true });`
          }}
        ></Script>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
