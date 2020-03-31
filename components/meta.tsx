import Head from 'next/head';
import { FunctionComponent } from 'react';

const Meta: FunctionComponent<{
  title: string;
  description: string;
}> = function(props) {
  return (
    <Head>
      <title>{props.title} - Mockoon</title>
      <meta name='description' content={props.description} />
      <meta property='og:image' content='https://mockoon.com/images/main.jpg' />
      <meta property='og:url' content='https://mockoon.com' />
      <meta property='og:title' content={'Mockoon - ' + props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:type' content='website' />
    </Head>
  );
};

export default Meta;
