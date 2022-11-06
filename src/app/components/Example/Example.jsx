import React from 'react';
import styles from './Example.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const Example = () => {
  return (
    <section className={styles.example}>
      <div className={cx("container", styles.example__container)}>
        <div
          className={styles.example__image}
          style={{ backgroundImage: 'url("/images/example.jpg")' }}
        ></div>
        <div className={styles.example__info}>
          <h3 className={cx(styles.example__title, "title", "title--h3")}>
            Пример
          </h3>
          <div className={styles.example__descr}>
            <p className={cx("text")}>
              Я учил английский в школе, но все забыл. Сейчас я хочу
              работать в международной компании, успешно пройти интервью и
              затем свободно общаться с коллегами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
