import { FunctionComponent } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { linkTarget, transformLinkUri } from '../utils/url';
import Blockquote from './blockquote';
import CodeHighlighter from './code-highlighter';

const Markdown: FunctionComponent<{
  body: string;
  version?: string;
}> = function (props) {
  return (
    <ReactMarkdownWithHtml
      source={props.body}
      escapeHtml={false}
      renderers={{
        code: CodeHighlighter,
        blockquote: (content) => (
          <Blockquote content={content.children}></Blockquote>
        )
      }}
      transformLinkUri={transformLinkUri(props.version)}
      linkTarget={linkTarget}
    />
  );
};

export default Markdown;
