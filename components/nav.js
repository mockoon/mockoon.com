import { Component } from 'react';
import Spectrum from './spectrum';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { menuOpened: false };
  }

  toggleMenu() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }
  render() {
    return (
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/">
              <img src="/static/images/logo.svg" className="logo" alt="Logo" width="150" />
            </a>

            <a role="button" className={`navbar-burger ${this.state.menuOpened ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleMenu.bind(this)}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu navbar-end ${this.state.menuOpened ? 'is-active' : ''}`}>
            <a className="navbar-item" href="/features">Features</a>
            <a className="navbar-item" href="/tutorials">Tutorials</a>
            <a className="navbar-item" href="/faq">FAQ</a>
            <a className="navbar-item" href="https://spectrum.chat/mockoon">
              <Spectrum />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
