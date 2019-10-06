import React from 'react';
import Donate from '../components/donate';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';
const version = require('../package.json').version;

const meta = { title: 'Mock API in seconds' };

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Meta title={meta.title} description="Mockoon is a free and open source desktop application allowing to quickly mock servers and API." />

        <Hero title={meta.title} subtitle="Mockoon is the easiest and quickest way to run mock APIs locally.<br>No remote deployment, no account required, open source." withDownloadCTA="true" mainPicture="/static/images/main.jpg" />

        <section className="section" id="download">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title">Download Mockoon <a href={'https://github.com/mockoon/mockoon/releases/tag/v' + version} target="_blank"><span className="is-size-6">v{version}</span></a></h1>
              </div>
            </div>

            <div className="columns">
              <div className="column is-4 has-text-centered">
                <p className="is-size-1 is-brand mb20"><i className="icon-windows"></i></p>
                <a className="button is-primary is-outlined" href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.exe`} onClick={() => ga('send', 'event', 'application', 'download', 'windows')}>
                  <span className="icon"><i className="icon-download"></i></span>
                  <span>exe installer</span>
                </a>
                <p className="content is-light">or <code>choco install mockoon</code></p>
              </div>
              <div className="column is-4 has-text-centered">
                <p className="is-size-1 is-brand mb20"><i className="icon-linux"></i></p>
                <div className="buttons has-addons is-centered">
                  <a className="button is-primary is-outlined is-marginless" href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.deb`} onClick={() => ga('send', 'event', 'application', 'download', 'linux')}>
                    <span className="icon"><i className="icon-download"></i></span>
                    <span>deb</span>
                  </a>
                  <a className="button is-primary is-outlined is-marginless" href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.rpm`} onClick={() => ga('send', 'event', 'application', 'download', 'linux')}>
                    <span className="icon"><i className="icon-download"></i></span>
                    <span>rpm</span>
                  </a>
                  <a className="button is-primary is-outlined is-marginless" href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon-${version}.AppImage`} onClick={() => ga('send', 'event', 'application', 'download', 'linux')}>
                    <span className="icon"><i className="icon-download"></i></span>
                    <span>AppImage</span>
                  </a>
                </div>
                <p className="content is-light">or <code>sudo snap install mockoon</code></p>
              </div>
              <div className="column has-text-centered">
                <p className="is-size-1 is-brand mb20"><i className="icon-apple"></i></p>
                <a className="button is-primary is-outlined" href={`https://github.com/mockoon/mockoon/releases/download/v${version}/mockoon.setup.${version}.dmg`} onClick={() => ga('send', 'event', 'application', 'download', 'osx')}>
                  <span className="icon"><i className="icon-download"></i></span>
                  <span>dmg</span>
                </a>
                <p className="content is-small is-light">or <code>brew cask install mockoon</code></p>
              </div>
            </div>

            <div className="columns">
              <div className="column has-text-centered">
                <p>Mockoon is released under the MIT license. Feel free to <a href="https://github.com/mockoon/mockoon">contribute</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title">Some great features!</h1>
              </div>
            </div>

            <div className="columns">
              <div className="column has-text-centered">
                <figure className="image rounded is-75 cb mb20">
                  <img src="/static/images/feature1.jpg" />
                </figure>
                <div className="content">
                  <p className="title is-4">Unlimited fast mocking</p>
                  <p>Create an unlimited number of mock local servers and routes, and run them in parallel.</p>
                </div>
              </div>
              <div className="column has-text-centered">
                <figure className="image rounded is-75 cb mb20">
                  <img src="/static/images/feature2.jpg" />
                </figure>
                <div className="content">
                  <p className="title is-4">Complete control</p>
                  <p>Customize routes: HTTP methods, regex paths, HTTP status, file serving, custom headers...</p>
                </div>
              </div>
              <div className="column has-text-centered">
                <figure className="image rounded is-75 cb mb20">
                  <img src="/static/images/feature3.jpg" />
                </figure>
                <div className="content">
                  <p className="title is-4">... and more</p>
                  <p>Import / export, JSON templating, auto save, proxy mode, HTTPS, latency simulation, CORS support...</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column has-text-centered">
                <a href="features">Complete list of features</a>
              </div>
            </div>
          </div>
        </section>

        <Donate />

        <section className="section" id="testimonials">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title">What developers say</h1>
              </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Mockoon is a nice and simple local API mocking tool by <a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a> <a href="https://t.co/6pr3uXpZ4r">https://t.co/6pr3uXpZ4r</a></p>&mdash; Damir Arh (@DamirArh) <a href="https://twitter.com/DamirArh/status/1043813625163583488?ref_src=twsrc%5Etfw">23 septembre 2018</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Mockoon by <a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a> - amazing tool for mocking APIs locally. Def a keeper <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> <a href="https://twitter.com/hashtag/Programming?src=hash&amp;ref_src=twsrc%5Etfw">#Programming</a> <a href="https://t.co/Ut6wZQUXBF">https://t.co/Ut6wZQUXBF</a> <a href="https://t.co/C0FuDN9Bo5">pic.twitter.com/C0FuDN9Bo5</a></p>&mdash; 🚀 Marius (@Maephisto) <a href="https://twitter.com/Maephisto/status/926431521220841473?ref_src=twsrc%5Etfw">3 novembre 2017</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Mockoon looks like a promising tool for creating local mocks for testing <a href="https://t.co/6rrAkmIk2M">https://t.co/6rrAkmIk2M</a> <a href="https://t.co/WMIxTgnpyU">pic.twitter.com/WMIxTgnpyU</a></p>&mdash; Nexmo Developer (@NexmoDev) <a href="https://twitter.com/NexmoDev/status/922560022055284739?ref_src=twsrc%5Etfw">23 octobre 2017</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Wow <a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a> Mockoon is incredibly easy to use! Thank you.</p>&mdash; Gareth Fuller (@GarethAFuller) <a href="https://twitter.com/GarethAFuller/status/920218814331187200?ref_src=twsrc%5Etfw">17 octobre 2017</a></blockquote>
              </div>
            </div>

            <div className="columns">
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Mockoon - the easiest and quickest way to run mock APIs locally.<br />No remote deployment, no account required, open source<br /><br /> <a href="https://t.co/IyFXC4ispf">https://t.co/IyFXC4ispf</a></p>&mdash; Geoffrey Crofte 🐲 🇱🇺 (@geoffrey_crofte) <a href="https://twitter.com/geoffrey_crofte/status/1034707726000168960?ref_src=twsrc%5Etfw">29 août 2018</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">OMG Mockoon, where have you been all these years?! <a href="https://t.co/8xnuDTLSZE">https://t.co/8xnuDTLSZE</a><br />Thank you <a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a>!</p>&mdash; Benjamin Reitzammer (@benjamin) <a href="https://twitter.com/benjamin/status/1097149234183397378?ref_src=twsrc%5Etfw">17 février 2019</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a> Great Job !! with mockoon. Latest update looks supercool!!..</p>&mdash; ;; (@notthatthing_) <a href="https://twitter.com/notthatthing_/status/1046706165772513280?ref_src=twsrc%5Etfw">1 octobre 2018</a></blockquote>
              </div>
              <div className="column is-one-quarter">
                <blockquote className="twitter-tweet" data-cards="hidden" data-dnt="true" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Mockoon is easy to use &amp; intuitive, great user experience. Thank you for creating this <a href="https://twitter.com/255kb?ref_src=twsrc%5Etfw">@255kb</a></p>&mdash; Steffen Laurens (@L_gondrong) <a href="https://twitter.com/L_gondrong/status/1044774814009835521?ref_src=twsrc%5Etfw">26 septembre 2018</a></blockquote>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />

        <section className="section" id="feedback">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title">Feedback welcome!</h1>
                <div className="content">
                  <p>You have found a bug, you have an idea? Submit them on Mockoon's <a href="https://github.com/mockoon/mockoon">GitHub repository</a>.</p>
                  <p>You like Mockoon? Spread the word :)</p>
                  <p>
                    <a title="Share on Twitter" href="http://twitter.com/share?url=https://mockoon.com&amp;text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.&amp;via=255kb&amp;"
                      onClick={(event) => { event.preventDefault(); window.open('http://twitter.com/share?url=https://mockoon.com&amp;text=Mockoon+is+the+easiest+and+quickest+way+to+run+mock+APIs+locally.+No+remote+deployment,+no+account+required,+open+source.&amp;via=255kb&amp;', 'twitter-share', 'width=800,height=600'); return false; }} className="button is-primary is-outlined twitter">
                      <span className="icon"><i className="icon-twitter" aria-hidden="true"></i></span>
                      <span>Twitter</span>
                    </a>
                    <a title="Share on Facebook" href="http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com" onClick={(event) => { event.preventDefault(); window.open('http://www.facebook.com/sharer/sharer.php?u=https://mockoon.com', 'facebook-share', 'width=800,height=600'); return false; }} className="button is-primary is-outlined facebook" style={{ marginLeft: 5 + 'px' }}>
                      <span className="icon"><i className="icon-facebook" aria-hidden="true"></i></span>
                      <span>Facebook</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    );
  }
}

export default Index;
