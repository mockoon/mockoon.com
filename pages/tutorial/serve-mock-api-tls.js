import Tutorial from '../../components/tutorial';
import Image from './partials/image';
import OpenSettingsGif from './partials/open-settings-gif';

const meta = { title: 'Serve a mock API over TLS', description: 'Need to mock a secured API? Mockoon can also do this!' };
/**
 * WIP
 */
function ServeMockApiTls() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        Sometimes you want to mock a secured server (over TLS), Mockoon got you covered:
        <ol>
          <li>Open the <strong>environment settings</strong> by clicking on the cog in the upper right corner:</li>
        </ol>
      </div>
      <OpenSettingsGif />
      <div className="content">
        <ol>
          <li value="2">Enable <strong>HTTPS option</strong>, ensure that a yellow lock is displayed next to the environment name which indicates that HTTPS option has been successfully activated.</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/enable-https-mode.gif" alt="Enable HTTPS mode" />
      <div className="content">
        <p>You may need to restart the environment for the changes to take effect.</p>
        <p>Your environment will now be available on <strong>https://localhost</strong> instead of <strong>http://localhost</strong>. Please note that Mockoon is using a self-signed certificate in order to serve your environment over TLS.</p>
      </div>
    </Tutorial>
  );
}

export default ServeMockApiTls;
