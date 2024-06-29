import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import '../styles/style.scss';
import { sendEvent } from '../utils/analytics';

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

export default function ({ Component, pageProps }) {
  const pathName = usePathname();

  useEffect(() => {
    sendEvent('pageview');
  }, [pathName]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Script>{`if(document.location.host.indexOf('mockoon.xyz') > -1 || document.location.host.indexOf('mockoon.online') > -1){document.location.replace('https://mockoon.com')}`}</Script>
      </QueryClientProvider>
    </>
  );
}
