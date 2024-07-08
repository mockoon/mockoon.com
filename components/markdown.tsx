import { slug } from 'github-slugger';
import { Children, FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { urlTransform } from '../utils/url';
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
  let linkSlug = '';

  const textChildren = Children.toArray(props.children);
  let text = textChildren.reduce(flatten, '');

  linkSlug = slug(text);

  // add anchor link
  const container = (children: React.ReactNode): JSX.Element => (
    <>
      <a
        href={`#${linkSlug}`}
        className='fw-bold text-gray-700 text-decoration-none anchor-link'
      >
        &nbsp;
        <i className='icon-link'></i>
      </a>
      {children}
    </>
  );
  switch (props.node.tagName) {
    case 'h1':
      return (
        <h1 id={linkSlug} className='fw-medium position-relative '>
          {container(props.children)}
        </h1>
      );
    case 'h2':
      return (
        <h2 id={linkSlug} className='fw-medium position-relative mt-8'>
          {container(props.children)}
        </h2>
      );
    case 'h3':
      return (
        <h3 id={linkSlug} className='fw-medium position-relative mt-6'>
          {container(props.children)}
        </h3>
      );
    case 'h4':
      return (
        <h4 id={linkSlug} className='fw-medium position-relative mt-6'>
          {container(props.children)}
        </h4>
      );
    case 'h5':
      return (
        <h5 id={linkSlug} className='fw-medium position-relative mt-4'>
          {container(props.children)}
        </h5>
      );
    case 'h6':
      return (
        <h6 id={linkSlug} className='fw-medium position-relative mt-4'>
          {container(props.children)}
        </h6>
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
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return /* !inline &&  */ match ? (
            <CodeBlock
              code={String(children).replace(/\n$/, '')}
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
                className={`img-fluid mx-auto d-block shadow mt-8 ${
                  hasSub ? 'mb-2' : 'mb-8'
                } rounded`}
              />
              {hasSub && (
                <span className='d-block text-center text-gray-700 mb-8'>
                  {altCleaned}
                </span>
              )}
            </>
          );
        },
        table: ({ children }) => {
          // check if 'NOSTYLE' is present in the header first cell
          let noStyle = false;

          let firstCell =
            children[0]?.props?.children?.props?.children?.[0]?.props?.children;
          if (firstCell && firstCell.includes('NOSTYLE')) {
            noStyle = true;
          }

          return (
            <div
              className={`card p-4 my-6 ${
                noStyle ? 'bg-transparent' : 'border shadow-lg'
              }`}
            >
              <div className='table-responsive'>
                <table className={`table ${noStyle ? 'table-borderless' : ''}`}>
                  {noStyle ? children[1] : children}
                </table>
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
            return <Quote colorScheme='secondary'>{content.children}</Quote>;
          }
        },
        h1: heading,
        h2: heading,
        h3: heading,
        h4: heading,
        h5: heading,
        h6: heading
      }}
      urlTransform={urlTransform(props.version)}
    />
  );
};

export default Markdown;
