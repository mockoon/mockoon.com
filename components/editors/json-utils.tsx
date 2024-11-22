import { jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { Text } from '@uiw/react-codemirror';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export const jsonLinter = linter(jsonParseLinter(), { delay: 100 });

export function getErrorPosition(
  error: SyntaxError,
  doc: Text
): { line?: number; column?: number; position?: number } {
  let match;
  if ((match = error.message.match(/at position (\d+)/)))
    return { position: Math.min(+match[1], doc.length) };
  if ((match = error.message.match(/at line (\d+) column (\d+)/)))
    return {
      position: Math.min(doc.line(+match[1]).from + +match[2] - 1, doc.length)
    };

  return {
    position: 1
  };
}

export function initAjv() {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  return ajv;
}
