import React from 'react';
import Helmet from 'react-helmet';

import styles from './Page.module.scss';

const Page = ({ pathContext }) => (
  <div className={styles.page}>
    <h1 className={styles.title}>{pathContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pathContext.body.childMarkdownRemark.html }} />
  </div>
);

export default Page;
