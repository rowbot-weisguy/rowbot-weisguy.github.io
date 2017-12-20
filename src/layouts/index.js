import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typekit from 'react-typekit';

import Header from '../ui/Header/Header';
import Footer from '../ui/Footer/Footer';

import '../assets/scss/common.scss';
import styles from './index.module.scss';

const TemplateWrapper = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Helmet
        title="Rowan Weismiller — Frontend Developer"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'design, development' },
        ]}
      />
      <Header modifiers={styles.header} />
      <div className={styles.content}>
        <main className={styles.main}>{children()}</main>
        <Footer />
      </div>
      <Typekit kitId="twt3aky" />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
