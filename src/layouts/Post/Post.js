import React from 'react';
import Helmet from 'react-helmet';

import { getPostDate } from '../../lib/dates';

import styles from './Post.module.scss';

const Post = ({ pathContext }) => (
  <article className={styles.post}>
    <h1 className={styles.title}>{pathContext.title}</h1>
    <p className={styles.meta}>Posted on {getPostDate(pathContext)}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: pathContext.body.childMarkdownRemark.html,
      }}
    />
  </article>
);

export default Post;
