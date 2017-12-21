import React from 'react';
import Helmet from 'react-helmet';

import styles from './Post.module.scss';

const getDateStringFromISO = (timestamp) => {
  const instance = new Date(timestamp);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const date = instance.getDate();
  const month = monthNames[instance.getMonth()];
  const year = instance.getFullYear();

  return `${date} ${month} ${year}`;
};

const Post = ({ pathContext }) => (
  <article className={styles.post}>
    <h1 className={styles.title}>{pathContext.title}</h1>
    <p className={styles.meta}>Posted on {getDateStringFromISO(pathContext.createdAt)}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: pathContext.body.childMarkdownRemark.html,
      }}
    />
  </article>
);

export default Post;
