import { Children, createElement, FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import { linkTarget, transformLinkUri } from '../utils/url';
import CodeBlock from './code-block';
import Quotation from './quotation';
import Quote from './quote';

const flatten = (text, child) => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
};

const heading = (props) => {
  const levelsSpacing = {
    '1': '', //h1 are not used in md as they are usually in the hero component
    '2': 'mt-8',
    '3': 'mt-6',
    '4': 'mt-6',
    '5': 'mt-4',
    '6': 'mt-4'
  };
  const children = Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().trim().replace(/\W/g, '-').replace('--', '-');
  return createElement(
    'h' + props.level,
    { id: slug, className: levelsSpacing[props.level] },
    props.children
  );
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
            <CodeBlock
              code={String(children).replace(/\n$/, '')}
              dark
              language={match[1]}
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
              className='img-fluid mx-auto d-block my-4 rounded'
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
