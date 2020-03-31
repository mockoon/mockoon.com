import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';
import OpenSettingsGif from './partials/open-settings-gif';

const meta = {
  title: 'API mocking with proxy mode',
  description:
    'Learn how to partially mock a REST API and proxy to another server with Mockoon.'
};

const ApiMockingProxyMode: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className='content'>
        Sometimes you may need to mock only part of an API and forward the rest
        to an existing REST server. Fortunately, you can do this with Mockoon:
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
            Enable <strong>proxy mode</strong> and enter the server URL to which
            you want to forward calls. A small shield icon should appear on the
            right of your environment name indicating that the proxy mode has
            been enabled:
          </li>
        </ol>
      </div>
      <Image
        src='/images/tutorials/enable-proxy-mode.gif'
        alt='Enable proxy mode'
      />
      <div className='content'>
        <p>
          All routes that have been defined will be intercepted by Mockoon, and
          any other request will be forwarded to the server defined in the proxy
          mode setting.
        </p>
      </div>
    </Tutorial>
  );
};

export default ApiMockingProxyMode;
