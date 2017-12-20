import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import partyGif from '../../assets/images/rowan-party.gif';

import styles from './Logo.module.scss';

const Logo = ({ url, party }) => (
  <Link to={url} className={styles.logo}>
    {!party &&
      <span className={styles.initial} aria-hidden="true">
        R
      </span>
    }
    <span className={styles.effects} aria-hidden="true" />
    {party &&
      <span className={styles.party} aria-hidden="true">
        <img src={partyGif} />
      </span>
    }
    <span className="sr-only">Rowan Weismiller</span>
  </Link>
);

export default Logo;
