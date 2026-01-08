import { FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: FunctionComponent<{
  code: string;
  language: string;
  maxHeight?: string;
  lineBreak?: boolean;
}> = function ({ code, language, maxHeight, lineBreak }) {
  const optionalProps: { style?: any } = { style: nord };

  return (
    <div className='code-block'>
      <div
        className={`code-block-copy btn btn-xs btn-light-subtle`}
        style={{ right: maxHeight ? '15px' : 0 }}
        onClick={(event) => {
          navigator.clipboard
            .writeText(code)
            .then(() => {
              (event.target as HTMLDivElement).textContent = 'Copied!';

              setTimeout(() => {
                (event.target as HTMLDivElement).textContent = 'Copy';
              }, 5000);
            })
            .catch(() => {});
        }}
      >
        Copy
      </div>

      <SyntaxHighlighter
        lineProps={
          lineBreak && {
            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' }
          }
        }
        wrapLongLines
        language={language}
        PreTag='div'
        className='code m-0'
        customStyle={{ maxHeight }}
        {...optionalProps}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
