import React from 'react';
import classnames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ size, children }) => (
  <div className={classnames(
    styles.container,
    styles[size] || styles['medium'],
  )}>
    {children}
  </div>
);

export default Container;
