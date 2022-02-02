import { Children, createElement, FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps
} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import { linkTarget, transformLinkUri } from '../utils/url';
import Quotation from './quotation';
import Quote from './quote';

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

const heading = (props) => {
  var children = Children.toArray(props.children);
  var text = children.reduce(flatten, '');
  var slug = text.toLowerCase().trim().replace(/\W/g, '-').replace('--', '-');
  return createElement('h' + props.level, { id: slug }, props.children);
};

const Markdown: FunctionComponent<{
  body: string;
  version?: string;
}> = function (props) {
  return (
    <ReactMarkdown
      children={props.body}
      rehypePlugins={[rehypeRaw]}
      plugins={[gfm]}
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag='div'
              children={String(children).replace(/\n$/, '')}
              {...(props as SyntaxHighlighterProps)}
              className='code'
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: ({ alt, src }) => {
          const [match, width, height] =
            /\{([0-9]{1,})x([0-9]{1,})\}/gi.exec(alt) || [];

          return (
            <img
              alt={alt.replace(match, '')}
              src={src as string}
              width={width}
              height={height}
              className='img-fluid mx-auto d-block'
            />
          );
        },
        table: ({ children }) => <table className='table'>{children}</table>,
        blockquote: (content) => {
          const value = (content?.node?.children?.[1] as any)?.children?.[0]
            ?.value;

          if (value && value.includes('##quotation##')) {
            return <Quotation quotation={JSON.parse(value)}></Quotation>;
          } else {
            return <Quote content={content.children}></Quote>;
          }
        },
        h1: heading,
        h2: heading,
        h3: heading,
        h4: heading,
        h5: heading,
        h6: heading
      }}
      transformLinkUri={transformLinkUri(props.version)}
      linkTarget={linkTarget}
    />
  );
};

export default Markdown;
