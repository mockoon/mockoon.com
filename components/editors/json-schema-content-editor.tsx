import { json } from '@codemirror/lang-json';
import { FunctionComponent, useState } from 'react';
import BaseEditor from './base-editor';
import { getErrorPosition, initAjv, jsonLinter } from './json-utils';

/**
 * Contains a JSON object to be validated against a JSON schema
 *
 * @param props
 * @returns
 */
const JsonSchemaContentEditor: FunctionComponent<{
  value: string;
  schema: string;
  showValidMsg?: boolean;
  showErrors?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  const [hideGoToLine, setHideGoToLine] = useState<boolean>(false);
  const ajvInstance = initAjv();

  return (
    <BaseEditor
      lang='json'
      editorExtensions={[json(), jsonLinter]}
      onErrorChange={(currentValue: string, viewUpdate) => {
        try {
          JSON.parse(currentValue);

          const validate = ajvInstance.compile(JSON.parse(props.schema));
          const isValid = validate(JSON.parse(currentValue));

          if (!isValid) {
            setHideGoToLine(true);

            return {
              message: `Validation errors:\n${validate.errors
                .slice(0, 6)
                .map(
                  (error) =>
                    `${error.instancePath ? error.instancePath.replace(/^\//, '') + ' ' : 'JSON '}${error.message}`
                )
                .join('\n')}`
            };
          }

          return null;
        } catch (error) {
          setHideGoToLine(false);

          return {
            message: `JSON error: ${error.message}`,
            ...getErrorPosition(error, viewUpdate.state.doc)
          };
        }
      }}
      hideGoToLine={hideGoToLine}
      {...props}
    />
  );
};

export default JsonSchemaContentEditor;
