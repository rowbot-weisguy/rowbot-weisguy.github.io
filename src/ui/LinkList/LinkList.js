import React from 'react';
import classnames from 'classnames';

import Link from '../Link/Link';

import styles from './LinkList.module.scss';

const LinkJsx = (link, index, arr) => (
  <li className={styles.item} key={index}>
    <Link url={link.url} text={link.text} />
  </li>
);

const LinkList = ({ links, header, horizontal }) => (
  <div>
    {header && <h3 className={styles.header}>{header}</h3>}
    <ul className={classnames(styles.list, horizontal && styles.horizontal)}>
      {links && links.map(LinkJsx)}
    </ul>
  </div>
);

export default LinkList;
