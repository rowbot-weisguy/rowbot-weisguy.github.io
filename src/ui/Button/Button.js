import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ onClickHandler, text, modifier }) => (
  <button onClick={onClickHandler} className={classnames(styles.button, modifier)}>
    {text}
  </button>
);

export default Button;
