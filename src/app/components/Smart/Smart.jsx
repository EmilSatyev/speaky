import React from 'react';
import styles from './Smart.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const Smart = () => {
  return (
    <section className={styles.smart}>
      <div className={cx("container", styles.smart__container)}>
        <div className={styles.smart__title_wrap}>
          <h2
            className={cx(
              "title",
              "title--h2",
              "title--marked",
              styles.smart__title
            )}
          >
            Мы используем SMART-подход в&nbsp;обучении
          </h2>
        </div>
        <div className={styles.smart__descr}>
          <p className={cx("text")}>
            Чтобы обучение было максимально эффективным, мы составляем
            индивидуальную карту обучения: ваша исходная точка, конечный
            результат, срок достижения этого результата. И будем вместе идти
            к этим целям
          </p>
        </div>
        <ul className={styles.smart__list}>
          <li className={styles.smart__item}>
            <span className={styles.smart__letter}>S</span>
            <p className={cx("text", styles.smart__list_sub_title)}>
              specific
            </p>
            <h3
              className={cx("title", "title--h3", styles.smart__list_title)}
            >
              Конкретная цель
            </h3>
          </li>
          <li className={styles.smart__item}>
            <span className={styles.smart__letter}>M</span>
            <p className={cx("text", styles.smart__list_sub_title)}>
              measurable
            </p>
            <h3
              className={cx("title", "title--h3", styles.smart__list_title)}
            >
              Критерии успеха
            </h3>
          </li>
          <li className={styles.smart__item}>
            <span className={styles.smart__letter}>A</span>
            <p className={cx("text", styles.smart__list_sub_title)}>
              achievable
            </p>
            <h3
              className={cx("title", "title--h3", styles.smart__list_title)}
            >
              Достижимая цель
            </h3>
          </li>
          <li className={styles.smart__item}>
            <span className={styles.smart__letter}>R</span>
            <p className={cx("text", styles.smart__list_sub_title)}>
              relevant
            </p>
            <h3
              className={cx("title", "title--h3", styles.smart__list_title)}
            >
              Цель, имеющая значение
            </h3>
          </li>
          <li className={styles.smart__item}>
            <span className={styles.smart__letter}>T</span>
            <p className={cx("text", styles.smart__list_sub_title)}>
              time bound
            </p>
            <h3
              className={cx("title", "title--h3", styles.smart__list_title)}
            >
              Четкие сроки
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Smart;
