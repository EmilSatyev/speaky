import React from 'react';
import styles from './Footer.module.scss'
import cnBind from "classnames/bind";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import ContactList from "../UI/ContactList/ContactList";

const cx = cnBind.bind(styles);


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cx(styles.footer__container, "container")}>
        <div className={styles.footer__col}>
          <h3 className={cx("title", "title--h3", styles.footer__title)}>
            Иностранные языки
          </h3>
          <ul className={styles.footer__list}>
            <li className={cx(styles.footer__item, "text")}>
              <a href="/">Для взрослых онлайн</a>
            </li>
            <li className={cx(styles.footer__item, "text")}>
              <a href="/">Для взрослых офлайн</a>
            </li>
            <li className={cx(styles.footer__item, "text")}>
              <a href="/">Для детей онлайн</a>
            </li>
            <li className={cx(styles.footer__item, "text")}>
              <a href="/">Для детей офлайн</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__col}>
          <a href="/" className={styles.footer__logo}>
            <img src="/images/logo-footer.png" alt="Логотип" />
          </a>
          <SocialIcons customClass={styles.footer__social}/>
          <a href="/" className={cx("btn")}>
            Онлайн-оплата
          </a>
        </div>
        <div className={styles.footer__col}>
          <ContactList />
        </div>
        <div className={styles.footer__bottom}>
          <span>© 2021 Speaky school. Все права защищены.</span>
          <span>Design by @arinkob</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
