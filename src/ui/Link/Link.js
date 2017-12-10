import React from 'react';
import GatsbyLink from 'gatsby-link';
import classnames from 'classnames';

import styles from './Link.module.scss';

const Link = ({ url, text, modifier }) => (
  <GatsbyLink to={url} className={classnames(
    styles.link,
    modifier,
  )}>
    {text}
  </GatsbyLink>
);

export default Link;
