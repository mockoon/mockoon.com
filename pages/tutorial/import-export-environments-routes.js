import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = { title: 'Import and export environments and routes', description: 'Learn how to easily import and export your environments and routes in JSON format with Mockoon' };

function ImportExportEnvironmentsRoutes() {
  return (
    <Tutorial meta={meta}>
      <div className="content">
        <p>Mockoon supports two types of import/export. Full import/export to JSON files or a single environment or route directly copied to the clipboard.</p>
        <h3>Export all environments to a JSON file</h3>
        <p>To export all environments to a file, open the <strong>Tools</strong> menu and select <strong>Export all environments to a file (JSON)</strong>:</p>
      </div>
      <Image src="/static/images/tutorials/export-all-environments.gif" alt="Export all environments" />
      <div className="content">
        <p>Since v1.7.0, exported data is independent of Mockoon's version. They can be imported in a more recent version and data will be automatically migrated. Once migrated, environments cannot be imported anymore in an older version. For older versions, exports are locked to the version on which they are created and cannot be imported on a different version.</p>
      </div>

      <div className="content">
        <h3>Single environment or route export to clipboard</h3>
        <p>To export a specific environment or route's JSON data to the clipboard, right-click on the environment or route and select <strong>Copy to clipboard (JSON)</strong>:</p>
      </div>
      <Image src="/static/images/tutorials/export-environment-clipboard.gif" alt="Copy environment JSON data to the clipboard" />
      <div className="content">
        <p>Starting with v1.7.0, the resulting JSON is fully compatible with the file-based import. It can either be imported through the "Import from clipboard" feature, or copied in a JSON file and imported through the "Import from a file" feature.<br/>One limitation: exported routes cannot be imported on a different version of Mockoon as data migration are not played for routes.</p>
      </div>

      <div className="content">
        <h3>Import from a JSON file</h3>
        <p>To import data from a JSON file, open the <strong>Tools</strong> menu and select <strong>Import from a file (JSON)</strong>:</p>
      </div>
      <Image src="/static/images/tutorials/import-all-environments.gif" alt="Import from a file" />
      <div className="content">
        <p>Any type of export can be imported from a JSON file: environments or single environment and route copied to the clipboard and saved to a JSON file. Environments imported from a file will be added at the end of the environments list. No data will be overwritten even if imported environments share the same names. Imported routes will be added to the active environment.</p>
      </div>

      <div className="content">
        <h3>Import from clipboard</h3>
        <p>To import data from the clipboard, open the <strong>Tools</strong> menu and select <strong>Import from clipboard</strong>:</p>
      </div>
      <Image src="/static/images/tutorials/import-environment-clipboard.gif" alt="Import environment JSON data from the clipboard" />
      <div className="content">
        <p>Again, any type of exported data can be imported through this method.</p>
      </div>

      <div className="content">
        <h3>Note for older version</h3>
        <p>Before v1.7.0, data exported through the clipboard method was not compatible with import from a file and vice versa. Also, exported data from one version couldn't be imported to another version of Mockoon. These limitations have been removed in v1.7.0</p>
      </div>
    </Tutorial>
  );
}

export default ImportExportEnvironmentsRoutes;
