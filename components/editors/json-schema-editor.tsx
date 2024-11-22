import { json } from '@codemirror/lang-json';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';
import { getErrorPosition, initAjv, jsonLinter } from './json-utils';

/**
 * Contains a JSON schema
 *
 * @param props
 * @returns
 */
const JsonSchemaEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  showErrors?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  const ajvInstance = initAjv();

  return (
    <BaseEditor
      lang='json'
      editorExtensions={[json(), jsonLinter]}
      onErrorChange={(currentValue: string, viewUpdate) => {
        try {
          JSON.parse(currentValue);

          try {
            ajvInstance.compile(JSON.parse(currentValue));
          } catch (error) {
            return {
              message: `Schema error: ${error.message.replace('strict mode: ', '')}`,
              ...getErrorPosition(error, viewUpdate.state.doc)
            };
          }
          return null;
        } catch (error) {
          return {
            message: `JSON error: ${error.message}`,
            ...getErrorPosition(error, viewUpdate.state.doc)
          };
        }
      }}
      {...props}
    />
  );
};

export default JsonSchemaEditor;
