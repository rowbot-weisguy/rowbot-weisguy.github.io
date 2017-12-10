import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../ui/Header/Header';
import Footer from '../ui/Footer/Footer';

import '../assets/scss/common.scss';
import styles from './index.module.scss';

const TemplateWrapper = ({ children }) => (
  <div className={styles.layout}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header modifiers={styles.header} />
    <main className={styles.content}>
      {children()}
      <Footer />
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
