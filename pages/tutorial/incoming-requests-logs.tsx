import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = { title: 'Access requests and responses logs', description: 'Check how to access Mockoon\'s entering requests and outgoing responses logs for easier debugging' };

const IncomingRequestsLogs: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        For easier debugging, Mockoon logs all entering requests together with their respective outgoing responses for each of your environment. To access the logs it's very simple:
        <ol>
          <li>After selecting the environment you are interested in, open the <strong>logs</strong> by clicking on the clock icon in the upper right corner:</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/open-logs.gif" alt="Open logs"/>
      <div className="content">
        <p>You will see in the list all the intercepted requests and how Mockoon answered them, on the currently selected environment. Please note that all requests are intercepted even favicon requests made by browsers! You can also easily see if a request has been caught by Mockoon or passed to another URL if proxy mode is activated for the environment.</p>
        <p>Complete headers list, route (URL) params, query params, and body in raw format are all included in the request's or response's details.</p>
      </div>
    </Tutorial>
  );
}

export default IncomingRequestsLogs;
