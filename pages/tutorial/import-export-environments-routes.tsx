import Tutorial from '../../components/tutorial';
import Image from './partials/image';
import { FunctionComponent } from 'react';

const meta = {
  title: 'Import and export environments and routes',
  description:
    'Learn how to easily import and export your environments and routes in OpenAPI or Mockoon format'
};

const ImportExportEnvironmentsRoutes: FunctionComponent = function () {
  return (
    <Tutorial meta={meta}>
      <div className='content'>
        <p>
          Mockoon supports import/export in two formats: Mockoon own format
          (JSON) and Swagger (v2) or OpenAPI (v3) format.
        </p>
        <h3>1. Mockoon's format</h3>
        <h4>Export all environments to a JSON file</h4>
        <p>
          To export all environments to a file, open the{' '}
          <strong>Import/export</strong> menu, select{' '}
          <strong>Mockoon's format</strong> and then{' '}
          <strong>Export all environments to a file (JSON)</strong>:
        </p>
      </div>
      <Image
        size='medium'
        src='/images/tutorials/export-all.png'
        alt='Click on Export all environments to a file (JSON)'
      />
      <div className='content'>
        <p>
          Since v1.7.0, the environments exported in older versions will be
          automatically migrated if imported in a more recent version. Once
          migrated, environments cannot be imported anymore in an older version.
          For versions prior 1.7.0, exports are locked to the version on which
          they were created and cannot be imported on a different version.
        </p>
      </div>
      <div className='content'>
        <h4>Single environment or route export to clipboard</h4>
        <p>
          To export a specific environment or route's JSON data to the
          clipboard, right-click on the environment or route and select{' '}
          <strong>Copy to clipboard (JSON)</strong>:
        </p>
      </div>
      <Image
        size='medium'
        src='/images/tutorials/export-clipboard-env.png'
        alt='Right click on an environment and click on Copy to clipboard (JSON)'
      />
      <Image
        size='medium'
        src='/images/tutorials/export-clipboard-route.png'
        alt='Right click on a route and click on Copy to clipboard (JSON)'
      />
      <div className='content'>
        <p>
          Starting with v1.7.0, the resulting JSON is fully compatible with the
          file-based import. It can either be imported through{' '}
          <strong>Import/export</strong> > <strong>Mockoon's format</strong> >{' '}
          <strong>Import from the clipboard</strong>, or copied in a JSON file
          and imported through <strong>Import/export</strong> >{' '}
          <strong>Mockoon's format</strong> >{' '}
          <strong>Import from a file</strong>.
          <br />
          One limitation: a single route copied to the clipboard cannot be
          imported on a different version of Mockoon as data migration cannot be
          applied on routes only.
        </p>
      </div>
      <div className='content'>
        <h4>Import from a JSON file</h4>
        <p>
          To import data from a JSON file, open the{' '}
          <strong>Import/export</strong> menu, select{' '}
          <strong>Mockoon's format</strong> and then{' '}
          <strong>Import from a file (JSON)</strong>:
        </p>
      </div>
      <Image
        size='medium'
        src='/images/tutorials/import-file.png'
        alt='Click on Import from a file'
      />
      <div className='content'>
        <p>
          Any type of export can be imported from a JSON file: environments JSON
          files or single environment/route copied to the clipboard and saved to
          a JSON file. Environments imported from a file will be added at the
          end of the environments list. No data will be overwritten even if
          imported environments share the same names. Imported routes will be
          added to the active environment.
        </p>
      </div>
      <div className='content'>
        <h4>Import from clipboard</h4>
        <p>
          To import data from the clipboard, open the{' '}
          <strong>Import/export</strong> menu, select{' '}
          <strong>Mockoon's format</strong> and then{' '}
          <strong>Import from clipboard</strong>:
        </p>
      </div>
      <Image
        size='medium'
        src='/images/tutorials/import-clipboard.png'
        alt='Click on Import from clipboard'
      />
      <div className='content'>
        <p>
          Again, any type of exported data can be imported through this method.
        </p>
      </div>
      <div className='content'>
        <h4>Note for older versions</h4>
        <p>
          Before v1.7.0, data exported through the clipboard method was not
          compatible with import from a file and vice versa. Also, exported data
          from one version couldn't be imported to another version of Mockoon.
          These limitations have been removed in v1.7.0
        </p>
      </div>
      <div className='content'>
        <h3>2. Swagger/OpenAPI format</h3>
        <p>
          Since v1.8.0, Mockoon also supports import in both OpenAPI v2 (Swagger) and v3
          formats. Environments can be exported to OpenAPI v3 format only.
        </p>
        <h4>Import environment from an OpenAPI v2 or v3 JSON/YAML file</h4>
        <p>
          To import an environment from a file, open the{' '}
          <strong>Import/export</strong> menu, select{' '}
          <strong>Swagger/OpenAPI</strong> and then{' '}
          <strong>Import Swagger v2/OpenAPI v3 (JSON or YAML)</strong>:
        </p>
      </div>{' '}
      <Image
        size='medium'
        src='/images/tutorials/import-openapi.png'
        alt='Click on Import Swagger v2/OpenAPI v3 (JSON or YAML)'
      />{' '}
      <div className='content'>
        <h4>Export an environment to an OpenAPI v3 JSON file</h4>
        <p>
          To export an environment to a JSON file, open the{' '}
          <strong>Import/export</strong> menu, select{' '}
          <strong>Swagger/OpenAPI</strong> and then{' '}
          <strong>Export current environment to OpenAPI v3 (JSON)</strong>:
        </p>
      </div>
      <Image
        size='medium'
        src='/images/tutorials/export-openapi.png'
        alt='Click on Export current environment to OpenAPI v3 (JSON)'
      />
      <div className='content'>
        <p>
          OpenAPI import and export currently support the following properties:
        </p>
        <ul>
          <li>API title</li>
          <li>Server URL, port, base path (prefix) and protocol</li>
          <li>
            Routes paths (including parameters), methods, responses with status
            code (200, etc) and headers, and descriptions
          </li>
        </ul>
      </div>
    </Tutorial>
  );
};

export default ImportExportEnvironmentsRoutes;
