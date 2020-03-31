import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = { title: 'Import and export environments and routes', description: 'Learn how to easily import and export your environments and routes in JSON format with Mockoon' };

const ImportExportEnvironmentsRoutes: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        <p>Mockoon supports two types of import/export. Full import/export based on files or a single environment or route based on the clipboard.</p>
        <h3>All environments import/export</h3>
        <ol>
          <li>To export all environments to a file, open the <strong>Tools</strong> menu and select <strong>Export all environments</strong>:</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/export-all-environments.gif" alt="Export all environments" />
      <div className="content">
        <ol>
          <li value="2">To import all environments from a file, open the <strong>Tools</strong> menu and select <strong>Import all environments from a file</strong>:</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/import-all-environments.gif" alt="Import environments from a file" />
      <div className="content">
        <p>Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names.</p>
      </div>

      <div className="content">
        <h3>Single environment or route import/export</h3>
        <ol>
          <li>To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select <strong>Copy to clipboard (JSON)</strong>:</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/export-environment-clipboard.gif" alt="Copy environment JSON data to the clipboard" />
      <div className="content">
        <ol>
          <li value="2">To import a specific environment or route's JSON data from the clipboard, open the <strong>Tools</strong> menu and select <strong>Import environment/route from clipboard</strong>:</li>
        </ol>
      </div>
      <Image src="/static/images/tutorials/import-environment-clipboard.gif" alt="Import environment JSON data from the clipboard" />
      <div className="content">
        <p>Environment imported from the clipboard will be added at the end of the environments list, and routes at the end of the active environment's routes list.</p>
        <p>Currently, Mockoon supports import/export in its own JSON format. More formats will come in future releases.</p>
      </div>
    </Tutorial>
  );
}

export default ImportExportEnvironmentsRoutes;
