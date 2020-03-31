import { Component } from 'react';
import Highlight from 'react-highlight';
import SnippetPage from '../../../components/snippets/snippet-page';
import { BasicSnippetsMenu } from '../../../content/snippets-menus/basic-menu';

const meta = {
  title: 'JSON snippet',
  description:
    'Here are some mock data and endpoints snippets that you can reuse in Mockoon'
};

class BasicSnippets extends Component {
  render() {
    return (
      <SnippetPage meta={meta} menuItems={BasicSnippetsMenu}>
        <div className='content'>
          <h3>JSON snippet</h3>
          <p>description</p>
          <Highlight className='html'>{`<html></html>`}</Highlight>
        </div>
      </SnippetPage>
    );
  }
}

export default BasicSnippets;
