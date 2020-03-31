import { Component } from 'react';
import Layout from '../../layout/layout';
import Download from '../download';
import Hero from '../hero';
import LeftNav, { LeftNavItems } from '../left-nav';
import Meta from '../meta';
import Newsletter from '../newsletter';

class SnippetPage extends Component<{
  menuItems: LeftNavItems;
  meta: { title: string; description: string };
}> {
  render() {
    return (
      <Layout>
        <Meta
          title={this.props.meta.title}
          description={this.props.meta.description}
        />
        <Hero
          title={this.props.meta.title}
          subtitle={this.props.meta.description}
        />

        <Download />

        <div className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-quarter'>
                <LeftNav menuItems={this.props.menuItems} />
              </div>
              <div className='column'>{this.props.children}</div>
            </div>
          </div>
        </div>

        <Newsletter />
      </Layout>
    );
  }
}

export default SnippetPage;
