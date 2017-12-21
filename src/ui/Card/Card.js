import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import styles from './Card.module.scss';

const Card = ({title, subtitle, emoji, link}) => {
  return (
    <Link className={styles.card} to={link}>
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </Link>
  );
};

export default Card;
