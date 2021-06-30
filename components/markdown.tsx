import { Children, createElement, FunctionComponent } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import { linkTarget, transformLinkUri } from '../utils/url';
import CodeHighlighter from './code-highlighter';
import Quotation from './quotation';
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
      plugins={[gfm]}
      renderers={{
        code: CodeHighlighter,
        image: ({ alt, src }) => (
          <img alt={alt} src={src} className='img-fluid' />
        ),
        table: ({ children }) => <table className='table'>{children}</table>,
        blockquote: (content) => {
          const value = content?.node?.children?.[0]?.children?.[0]?.value;

          if (value && value.includes('##quotation##')) {
            return <Quotation quotation={JSON.parse(value)}></Quotation>;
          } else {
            return <Quote content={content.children}></Quote>;
          }
        },
        heading: (props) => {
          var children = Children.toArray(props.children);
          var text = children.reduce(flatten, '');
          var slug = text
            .toLowerCase()
            .trim()
            .replace(/\W/g, '-')
            .replace('--', '-');
          return createElement('h' + props.level, { id: slug }, props.children);
        }
      }}
      transformLinkUri={transformLinkUri(props.version)}
      linkTarget={linkTarget}
    />
  );
};

export default Markdown;
