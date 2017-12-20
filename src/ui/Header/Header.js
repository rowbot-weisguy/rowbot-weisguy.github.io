import React from 'react';
import classnames from 'classnames';

import Logo from '../Logo/Logo';
import LinkList from '../LinkList/LinkList';
import Button from '../Button/Button';

import styles from './Header.module.scss';

const local = {
  links: [
    {
      url: '/',
      text: 'Blog',
    },
    {
      url: '/about',
      text: 'About',
    },
  ],
};

const Header = ({ modifiers, party, action}) => (
  <header className={classnames(styles.header, modifiers)}>
    <Logo url="/" party={party}/>
    <nav className={styles.nav}>
      <LinkList links={local.links}/>
    </nav>
    <div className={styles.actions}>
      <Button
        onClickHandler={action}
        modifiers={party && 'party'}
        text={
          party
          ? "Chill 😴"
          : "Party 🎉"
        }
      />
    </div>
  </header>
);

export default Header;
