import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typekit from 'react-typekit';

import Header from '../ui/Header/Header';
import Footer from '../ui/Footer/Footer';

import '../assets/scss/common.scss';
import styles from './index.module.scss';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {party: false};
    this.toggleParty = this.toggleParty.bind(this);
  }

  toggleParty() {
    this.setState(previousState => {
      return {party: !previousState.party};
    });
  }

  render() {
    return (
      <div className={styles.layout}>
        <Helmet>
          <title>Rowan Weismiller — Frontend Developer</title>
          <meta name="description" content="Rowan Weismiller is a frontend developer and community organizer interested in the web, cities, and cats."/>
          <meta name="keywords" content="rowan weismiller frontend development civic tech community"/>
        </Helmet>
        <Header action={this.toggleParty} modifiers={styles.header} />
        <div className={styles.content}>
          <main className={styles.main}>{this.props.children()}</main>
          <Footer />
        </div>
        <Typekit kitId="twt3aky" />
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.func,
};

export default Root;
