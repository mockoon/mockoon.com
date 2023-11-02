import { Children, FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { linkTarget, transformLinkUri } from '../utils/url';
import CodeBlock from './code-block';
import Quotation from './quotation';
import Quote from './quote';
import SponsoringMessage from './sponsoring-message';

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
  let text = children.reduce(flatten, '');
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/\W/g, '-')
    .replace('--', '-')
    .replace(/^\-|\-$/g, '');

  let hasVertBar = false;

  if (typeof children[0] === 'string' && children[0].includes('|')) {
    hasVertBar = true;
    children[0] = (children[0] as string).replace('|', '');
  }

  // add anchor link

  const container = (children: React.ReactNode): JSX.Element => (
    <>
      {hasVertBar && <span className='text-primary pe-2'>|</span>}
      {children}
      <a
        id={slug}
        href={`#${slug}`}
        className='ms-2 fs-3 fw-bold text-muted text-decoration-none'
      >
        <small>#</small>
      </a>
    </>
  );
  switch (props.level) {
    case 1:
      return (
        <h1 className={levelsSpacing[props.level]}>{container(children)}</h1>
      );
    case 2:
      return (
        <h2 className={levelsSpacing[props.level]}>{container(children)}</h2>
      );
    case 3:
      return (
        <h3 className={levelsSpacing[props.level]}>{container(children)}</h3>
      );
    case 4:
      return (
        <h4 className={levelsSpacing[props.level]}>{container(children)}</h4>
      );
    case 5:
      return (
        <h5 className={levelsSpacing[props.level]}>{container(children)}</h5>
      );
    case 6:
      return (
        <h6 className={levelsSpacing[props.level]}>{container(children)}</h6>
      );
  }
};

const Markdown: FunctionComponent<{
  body: string;
  version?: string;
  slug?: string;
}> = function (props) {
  return (
    <ReactMarkdown
      children={props.body}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
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
        hr: () => <hr className='my-8' />,
        img: ({ alt, src }) => {
          alt = alt || '';

          // find optional subtitle and size info
          const [match, width, height] =
            /\{([0-9]{1,})x([0-9]{1,})\}/gi.exec(alt) || [];

          const hasSub = alt.includes('#sub#');
          const altCleaned = alt.replace(match, '').replace('#sub#', '');

          // rewrite docs src
          if (src.startsWith('docs-img:')) {
            src = `/images/${props.slug}/${src.replace('docs-img:', '')}`;
          }

          return (
            <>
              <img
                alt={altCleaned}
                src={src as string}
                width={width}
                height={height}
                className={`img-fluid mx-auto d-block mt-8 ${
                  hasSub ? 'mb-4' : 'mb-8'
                } rounded`}
              />
              {hasSub && (
                <span className='d-block fs-6 text-center text-muted mb-8'>
                  {altCleaned}
                </span>
              )}
            </>
          );
        },
        table: ({ children }) => {
          // check if 'NOSTYLE' is present in the header first cell
          let noStyle = false;
          let firstCell = (children[0] as any)?.props?.children[0]?.props
            ?.children[0]?.props?.children;
          if (firstCell && firstCell.includes('NOSTYLE')) {
            noStyle = true;
            firstCell[0] = '';
          }

          return (
            <div
              className={`card p-4 my-6 ${
                noStyle ? 'bg-transparent' : 'border shadow-lg'
              }`}
            >
              <div className='table-responsive'>
                <table className='table'>{children}</table>
              </div>
            </div>
          );
        },
        blockquote: (content) => {
          const value = (content?.node?.children?.[1] as any)?.children?.[0]
            ?.value;

          if (value && value.includes('##quotation##')) {
            return <Quotation quotation={JSON.parse(value)}></Quotation>;
          } else if (value && value.includes('##sponsoring##')) {
            return (
              <SponsoringMessage
                sponsoringMessage={JSON.parse(value)}
              ></SponsoringMessage>
            );
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
