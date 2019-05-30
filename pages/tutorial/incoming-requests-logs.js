import Tutorial from '../../components/tutorial';

const meta = { title: 'Access incoming requests logs', description: 'Check how to access Mockoon\'s entering requests logs for easier debugging' };

function IncomingRequestsLogs() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        For easier debugging, Mockoon log all entering requests for each of your environment. To access the logs it's very simple:
        <ol>
          <li>After selecting the environment you are interested in open the <strong>requests logs</strong> by clicking on the clock icon in the upper right corner:</li>
        </ol>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <figure className="image">
            <img src="/static/images/tutorials/open-request-logs.gif" alt="Open requests logs" />
          </figure>
        </div>
      </div>
      <div className="content">
        <p>You will see in the list all the requests intercepted by Mockoon on the currently selected environment. Please note that all requests are intercepted even favicon requests made by browsers!</p>
        <p>Complete headers list, route (URL) params, query params, and body in raw format are all included in the request's details.</p>
      </div>
    </Tutorial>
  );
}

export default IncomingRequestsLogs;
