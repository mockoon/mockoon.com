import GitHub from './github';
import Spectrum from './spectrum';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>&copy; Mockoon 2017 - present by <a href="https://github.com/255kb">255kb</a></p>
          <p>
            <a href="https://spectrum.chat/mockoon">
              <Spectrum />
            </a>
          </p>
          <GitHub />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
