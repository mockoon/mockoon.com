import Download from '../components/download';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import tutorialsList from '../content/tutorials-list';
import Layout from '../layout/layout';
const meta = {
  title: 'Tutorials', description: 'Learn how to use Mockoon\'s features and mock your REST server or API like a pro!'
};

function Tutorials() {
  const numberPerRow = 4;
  const numberOfRows = Math.ceil(tutorialsList.length / numberPerRow);
  const tutorialsContent = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    tutorialsContent.push(
      <div key={'tutorialRow' + rowIndex} className="columns">
        {
          tutorialsList.slice(rowIndex * numberPerRow, (rowIndex * numberPerRow) + numberPerRow).map((tutorial, tutorialIndex) => {
            return (
              <div key={'tutorial' + tutorialIndex} className="column">
                <div className="card">
                  <div className="card-image">
                    <a href={`/tutorial/${tutorial.slug}`}>
                      <figure className="image">
                        <img src={tutorial.picture} alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-5">{tutorial.title}</p>
                      </div>
                    </div>

                    <div className="content">
                      {tutorial.description}
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href={tutorial.slug} className="card-footer-item">Read</a>
                  </footer>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <Download />

      <div className="section">
        <div className="container">
          {tutorialsContent}
        </div>
      </div>

      <Newsletter />
    </Layout>
  );
}

export default Tutorials;
