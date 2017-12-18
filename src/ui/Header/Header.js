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

const Header = ({ modifiers }) => (
  <header className={classnames(
    styles.header,
    modifiers,
  )}>
    <Logo url="/"/>
    <nav className={styles.nav}>
      <LinkList links={local.links} />
    </nav>
    <div className={styles.actions}>
      <Button url="/" text="Party 🎉" modifiers="js-party-button"/>
      <audio loop className="js-party-music" src="/assets/sounds/sandstorm.mp3" preload="none"/>
    </div>
  </header>
);

export default Header;
