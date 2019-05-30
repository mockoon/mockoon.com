import Head from 'next/head';

function Meta(props) {
  return (
    <Head>
      <title>{props.title} - Mockoon</title>
      <meta name="description" content={props.description} />
      <meta property="og:image" content="https://mockoon.com/static/images/main.jpg" />
      <meta property="og:url" content="https://mockoon.com" />
      <meta property="og:title" content={'Mockoon - ' + props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export default Meta;
