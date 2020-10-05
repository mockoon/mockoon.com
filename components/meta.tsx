import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { MetaData } from '../models/common.model';

const rootUrl = 'https://mockoon.com';

const Meta: FunctionComponent<MetaData> = function (props) {
  const router = useRouter();

  return (
    <Head>
      <title>{props.title} - Mockoon</title>
      <meta name='description' content={props.description} />
      <meta
        property='og:image'
        content={
          'https://mockoon.com/images/' + (props.image || 'screenshot.png')
        }
      />
      <meta
        property='og:url'
        content={rootUrl + (props.url ? props.url : router.pathname)}
      />
      <meta property='og:title' content={'Mockoon - ' + props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:type' content={props.ogType || 'website'} />
    </Head>
  );
};

export default Meta;
