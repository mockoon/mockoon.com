import { Component } from 'react';
import Highlight from 'react-highlight';
import SnippetPage from '../../../components/snippets/snippet-page';
import { BasicSnippetsMenu } from '../../../content/snippets-menus/basic-menu';

const meta = {
  title: 'CSV generation',
  description: 'Return generated CSV in your route bodies with Mockoon'
};

class CSVGeneration extends Component {
  render() {
    return (
      <SnippetPage meta={meta} menuItems={BasicSnippetsMenu}>
        <div className='content'>
          <h3>CSV generation</h3>
          <p>description</p>
          <Highlight className='csv'>{`firstname,lastname`}</Highlight>
        </div>
      </SnippetPage>
    );
  }
}

export default CSVGeneration;
