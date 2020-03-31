import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = { title: 'Define route and environment response headers', description: 'Mockoon can handle response headers at both environment and route levels for your mock server, learn how.' };

const DefineResponseHeaders: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        <p>In Mockoon you can easily define <strong>response headers</strong> for <strong>each route</strong> but also at the <strong>environment level</strong>. Response headers defined on a route will <strong>override</strong> those defined on an environment.</p>
        <h3>Route level response headers</h3>
        <p>To add response headers like <code>Content-Type</code> to your route go to the <strong>Headers tab</strong> and fill the name and value fields:</p>
      </div>
      <Image src="/static/images/tutorials/add-route-header.gif" alt="Add route response header" />
      <div className="content">
        <h3>Environment level response headers</h3>
        <p>You can also add response headers at the environment level. Headers defined on an environment will be overridden if they are redefined on a route. To define an environment response header head to <strong>environment settings</strong> and add headers at the bottom of the page:</p>
      </div>
      <Image src="/static/images/tutorials/add-environment-header.gif" alt="Add environment response header" />
    </Tutorial>
  );
}

export default DefineResponseHeaders;
