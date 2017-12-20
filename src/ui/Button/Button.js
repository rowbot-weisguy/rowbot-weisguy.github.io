import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({ onClickHandler, text, modifiers }) => (
  <button onClick={onClickHandler} className={classnames(styles.button, modifiers)}>
    {text}
  </button>
);

export default Button;
