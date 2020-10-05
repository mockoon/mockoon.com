import { FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeHighlighter: FunctionComponent<{
  value: string;
  language: string;
}> = function (props) {
  return (
    <SyntaxHighlighter language={props.language} style={vscDarkPlus}>
      {props.value}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
