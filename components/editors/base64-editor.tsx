import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

export function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

export function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

const Base64Editor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  return (
    <BaseEditor
      lang='text'
      hideGoToLine
      editorExtensions={[]}
      onErrorChange={(currentValue: string, viewUpdate) => {
        try {
          new TextDecoder().decode(base64ToBytes(currentValue));

          return null;
        } catch (error) {
          return {
            message: error.message.replace(
              "Failed to execute 'atob' on 'Window': ",
              ''
            )
          };
        }
      }}
      {...props}
    />
  );
};

export default Base64Editor;
