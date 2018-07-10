import React from 'react';
import GatsbyLink from 'gatsby-link';
import classnames from 'classnames';

import styles from './Link.module.scss';

const Link = ({ url, text, modifier }) => {
  if (url.startsWith('http')) {
    return (
      <a href={url} className={classnames(styles.link, modifier)}>
        {text}
      </a>
    );
  }
  return (
    <GatsbyLink to={url} className={classnames(styles.link, modifier)}>
      {text}
    </GatsbyLink>
  );
};

export default Link;
