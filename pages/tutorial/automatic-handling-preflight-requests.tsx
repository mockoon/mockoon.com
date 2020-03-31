import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';
import OpenSettingsGif from './partials/open-settings-gif';

const meta = {
  title: 'Automatic handling of preflight OPTIONS requests',
  description:
    'Front and API are not on the same domain? Handle preflight requests automatically with Mockoon'
};

const AutomaticHandlingPreflightRequests: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className='content'>
        When mocking, chances are front application and mocked API won’t be on
        the <strong>same domain</strong>, thus triggering browsers OPTIONS
        preflight requests.
        <br />
        Failing to answer to these requests may prevent your application from
        working. Luckily, Mockoon can handle this for you:
        <ol>
          <li>
            Open the <strong>environment settings</strong> by clicking on the
            cog in the upper right corner:
          </li>
        </ol>
      </div>
      <OpenSettingsGif />
      <div className='content'>
        <ol>
          <li value='2'>
            Enable <strong>CORS option</strong>, ensure that blue crossing
            arrows are displayed next to the environment name which indicates
            that CORS option has been successfully activated.
          </li>
        </ol>
      </div>
      <Image
        src='/images/tutorials/enable-cors-mode.gif'
        alt='Enable CORS mode'
      />
      <div className='content'>
        <p>
          You may need to restart the environment for the changes to take
          effect.
        </p>
        <p>
          Starting from now Mockoon will automatically answer with a 200 HTTP
          status code to all preflight OPTIONS requests. The following headers
          will also be added to the response:
        </p>
        <p>
          <code>Access-Control-Allow-Origin: *</code>
          <br />
          <code>
            Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
          </code>
          <br />
          <code>
            Access-Control-Allow-Headers: Content-Type, Origin, Accept,
            Authorization, Content-Length, X-Requested-With
          </code>
          <br />
        </p>
        <p>
          Mockoon won’t send any CORS header if you define a route with the
          OPTIONS method in your environment (i.e.{' '}
          <code>OPTIONS /my-route</code>), leaving you in full control of the
          headers you want to add.
        </p>
      </div>
    </Tutorial>
  );
};

export default AutomaticHandlingPreflightRequests;
