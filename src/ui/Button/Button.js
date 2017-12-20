import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ url, text, modifiers }) => (
  <Link to={url} className={classnames(styles.button, modifiers)}>
    {text}
  </Link>
);

export default Button;
