import React, { useState } from 'react';
import styles from './header.module.scss';
import logoImage from '../../assets/images/Logo-header.png';
import { HeaderTablet } from './header-tablet/header-tablet';
import { HeaderMenu } from './header-menu';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsHeaderModalOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header_div}>
            <a href="/">
              <img src={logoImage} alt="logo" className={styles.header_logo} />
            </a>
            <div className={styles.header_menu}>
              <button
                className={classNames(styles.header_icon_open, {
                  [styles.header_icon_close]: isHeaderModalOpen,
                })}
                onClick={toggleModal}
                aria-label="Open header menu"
              ></button>
            </div>
          </div>
        </div>
      </header>
      <HeaderTablet />
      {isHeaderModalOpen && <HeaderMenu />}
    </>
  );
};
