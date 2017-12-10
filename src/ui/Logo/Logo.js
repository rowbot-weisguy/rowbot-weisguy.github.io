import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import styles from './Logo.module.scss';

const Logo = ({ url }) => (
  <Link to={url} className={styles.logo}>
    <span className={styles.initial} aria-hidden="true">R</span>
    <span className={styles.effects} aria-hidden="true"></span>
    <span className={styles.party} aria-hidden="true"><img src="/assets/images/rowan-party.gif"/></span>
    <span className="sr-only">Rowan Weismiller</span>
  </Link>
);

export default Logo;
