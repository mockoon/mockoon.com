import Tutorial from '../../components/tutorial';

const meta = { title: 'Define a prefixed API', description: 'Want to prefix your mock server routes? Learn how to do it with Mockoon' };

function DefinePrefixedApi() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        <p>Prefixing your mock API may be technically required or you may want to keep the same prefix as the server you are mocking.</p>
        <p>In order to prefix all your REST API routes, fill the “prefix” input at the top of <strong>environment options</strong>:</p>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <figure className="image">
            <img src="/static/images/tutorials/add-prefix.gif" alt="Add prefix" />
          </figure>
        </div>
      </div>
      <div className="content">
        <p>The prefix will appear under your environment name in the environments list and all your environment's routes will now be prefixed and available at the following address <code>http://localhost:port/prefix/myroute</code> instead of <code>http://localhost:port/myroute</code>.</p>
      </div>
    </Tutorial>
  );
}

export default DefinePrefixedApi;
