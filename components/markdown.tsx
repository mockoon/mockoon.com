import { Children, createElement, FunctionComponent } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { linkTarget, transformLinkUri } from '../utils/url';
import Blockquote from './blockquote';
import CodeHighlighter from './code-highlighter';
import Quote from './quote';

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

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
        blockquote: (content) => {
          const value = content?.node?.children?.[0]?.children?.[0]?.value;

          if (value && value.includes('##quote##')) {
            return <Quote quote={JSON.parse(value)}></Quote>;
          } else {
            return <Blockquote content={content.children}></Blockquote>;
          }
        },
        heading: (props) => {
          var children = Children.toArray(props.children);
          var text = children.reduce(flatten, '');
          var slug = text.toLowerCase().replace(/\W/g, '-').replace('--', '-');
          return createElement('h' + props.level, { id: slug }, props.children);
        }
      }}
      transformLinkUri={transformLinkUri(props.version)}
      linkTarget={linkTarget}
    />
  );
};

export default Markdown;
