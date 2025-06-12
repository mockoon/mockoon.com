import { marked } from 'marked';
import { FunctionComponent, useState } from 'react';
import HtmlEditor from '../../components/editors/html-editor';
import MarkdownEditor from '../../components/editors/markdown-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const MarkdownToHtml: FunctionComponent = function () {
  const [markdownContent] = useState<string>(`# Markdown to HTML converter

This tool allows you to convert your markdown content to HTML.

## How to use

1. Write or paste your markdown content in the left editor
2. The HTML content will be generated in real-time in the right editor
3. Copy the generated HTML content
4. Profit!

_Note: This converter supports GitHub Flavored Markdown (GFM) and tables._
`);
  const [htmlContent, setHtmlContent] =
    useState<string>(`<h1 id="markdown-to-html-converter">Markdown to HTML converter</h1>
<p>This tool allows you to convert your markdown content to HTML.</p>
<h2 id="how-to-use">How to use</h2>
<ol>
<li>Write or paste your markdown content in the left editor</li>
<li>The HTML content will be generated in real-time in the right editor</li>
<li>Copy the generated HTML content</li>
<li>Profit!</li>
</ol>
<p><em>Note: This converter supports GitHub Flavored Markdown (GFM) and tables.</em></p>`);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Markdown to HTML converter'}
        description='Use Mockoon Markdown to HTML converter to parse your markdown syntax and convert it to a structured HTML page'
      />
      <Hero
        title='Markdown to HTML <span class="text-primary">converter</span>'
        subtitle='Convert your Markdown content to HTML'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <MarkdownEditor
                value={markdownContent}
                onValueChange={(value) => {
                  try {
                    setHtmlContent(marked(value, { gfm: true }) as string);
                  } catch (error) {}
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='code-editor-container'>
              <HtmlEditor value={htmlContent} />
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fw-medium'>About this tool</h3>
              <p>
                This tool allows you to convert your markdown content to HTML.
                It supports GitHub Flavored Markdown (GFM) and tables.
              </p>
              <p>
                It uses the <a href='https://marked.js.org/'>marked</a> library
                to parse the markdown content and convert it to HTML.
              </p>
              <h3 className='fw-medium'>About Markdown</h3>
              <p>
                Markdown is a lightweight markup language with
                plain-text-formatting syntax. Created in 2004 by John Gruber,
                with significant contributions from Aaron Swartz, Markdown is
                one of the most popular markup languages used to format content.
              </p>

              <p>
                Markdown's syntax is intended to be as readable and easy to
                write as possible. Its key design goal is readability, that the
                language be readable as-is, without looking like it has been
                marked up with tags or formatting instructions. Markdown is
                often converted to HTML by various libraries and tools to be
                displayed on the web.
              </p>
              <p>Some Markdown syntax elements include:</p>
              <ul>
                <li>
                  <strong>Headers</strong> (<code>#</code>):{' '}
                  <code># title 1</code>, <code>## title 2</code>, etc. for
                  headers level 1 to 6 ({'<'}H1{'>'} to {'<'}H6{'>'}).
                </li>
                <li>
                  <strong>Emphasis</strong> (<code>*</code>, <code>_</code>):
                  <code>*italic*</code>, <code>_italic_</code>,{' '}
                  <code>**bold**</code>, <code>__bold__</code> usually
                  translated to {'<'}em{'>'} and {'<'}strong{'>'} tags.
                </li>
                <li>
                  <strong>Lists</strong> (<code>*</code>, <code>1.</code>):
                  <code>* item 1</code>, <code>* item 2</code>, etc. for
                  unordered lists, <code>1. item 1</code>,{' '}
                  <code>2. item 2</code>, etc. for ordered lists ({'<'}ol{'>'})
                </li>
                <li>
                  <strong>Links</strong> (<code>[]()</code>):
                  <code>[text](https://link.com)</code> for {'<'}a{'>'} tags.
                </li>
                <li>
                  <strong>Images</strong> (<code>![]()</code>):
                  <code>![alt text](https://image.com)</code> for {'<'}img{'>'}{' '}
                  tags.
                </li>
                <li>
                  <strong>Code blocks</strong> (<code>```</code>):
                  <code>
                    {'```'}
                    {'\n'}code{'\n'}
                    {'```'}
                  </code>{' '}
                  for code blocks.
                </li>
              </ul>
              <h3 className='fw-medium'>About HTML</h3>
              <p>
                HTML (HyperText Markup Language) is the standard markup language
                for documents designed to be displayed in a web browser. It can
                be assisted by technologies such as Cascading Style Sheets (CSS)
                and scripting languages such as JavaScript.
              </p>
              <p>
                Created by Tim Berners-Lee in 1993, HTML is used to create
                structured documents by denoting structural semantics for text
                such as headings, paragraphs, lists, links, quotes, and other
                items.
              </p>
              <p>Common HTML elements include:</p>
              <ul>
                <li>
                  <strong>Headers</strong> (<code>{'<h1>'}</code>,{' '}
                  <code>{'<h2>'}</code>, etc.):{' '}
                  <code>{'<h1>title 1</h1>'}</code>,{' '}
                  <code>{'<h2>title 2</h2>'}</code>, etc.
                </li>
                <li>
                  <strong>Paragraphs</strong> (<code>{'<p>'}</code>):{' '}
                  <code>{'<p>paragraph</p>'}</code>
                </li>
                <li>
                  <strong>Lists</strong> (<code>{'<ul>'}</code>,{' '}
                  <code>{'<ol>'}</code>, <code>{'<li>'}</code>):{' '}
                  <code>{'<ul>'}</code>, <code>{'<li>item 1</li>'}</code>, etc.
                </li>
                <li>
                  <strong>Links</strong> (<code>{'<a>'}</code>):{' '}
                  <code>{'<a href="https://link.com">text</a>'}</code>
                </li>
                <li>
                  <strong>Images</strong> (<code>{'<img>'}</code>):{' '}
                  <code>{'<img src="https://image.com" alt="alt text">'}</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarkdownToHtml;
