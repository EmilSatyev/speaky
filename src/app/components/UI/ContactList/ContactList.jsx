import React from 'react';
import styles from './ContactList.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const ContactList = (props) => {
  return (
    <div className={cx(styles.contactList, props.customClass)}>
      <h3 className={cx("title", "title--h3", styles.contactList__title)}>
        Контакты
      </h3>
      <ul className={styles.contactList__list}>
        <li className={cx(styles.contactList__item, 'text')}>
          <a href="tel:74957237515">+7 (495) 723-75-15</a>
        </li>
        <li className={cx(styles.contactList__item, 'text')}>
          <a href="mailto:info@speaky.school">info@speaky.school</a>
        </li>
        <li className={cx(styles.contactList__item, 'text')}>
          <a href="/">
            108840,&nbsp;Россия г.&nbsp;Москва,&nbsp;г.&nbsp;Троицк, Троицкий бульвар, 6
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
