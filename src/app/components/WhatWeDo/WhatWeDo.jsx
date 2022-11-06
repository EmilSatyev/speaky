import React from "react";
import styles from "./WhatWeDo.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const WhatWeDo = () => {
  return (
    <section className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div className={styles.root__title_wrap}>
          <h2 className={cx("title", "title--h2", "title--marked")}>
            Что будем делать&nbsp;мы?
          </h2>
        </div>
        <ul className={styles.root__list}>
          <li className={styles.root__item}>сформулируем конкретную цель</li>
          <li className={styles.root__item}>обозначим срок достижения цели</li>
          <li className={styles.root__item}>назначим даты чекпоинтов</li>
          <li className={styles.root__item}>
            начнём постепенно двигаться к цели
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
