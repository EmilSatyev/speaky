import React from "react";
import styles from "./Feature.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Feature = () => {
  return (
    <section className={styles.feature}>
      <div className={cx("container", styles.feature__container)}>
        <div className={styles.feature__info}>
          <h2
            className={cx(
              "title",
              "title--h2",
              "title--marked",
            )}
          >
            Выбирая для своего ребенка
          </h2>
          <div className={styles.feature__desrc}>
            <p>
              изучение языков в&nbsp;нашей языковой школе, вы&nbsp;должны знать
              об&nbsp;особенностях нашего онлайн-обучения:
            </p>
          </div>
        </div>
        <ul className={styles.feature__list}>
          <li className={styles.feature__item}>
            <p className={cx("text")}>
              На&nbsp;первом занятии мы&nbsp;узнаем об&nbsp;интересах вашего
              ребенка, его увлечениях и&nbsp;особенностях.
            </p>
          </li>
          <li className={styles.feature__item}>
            <p className={cx("text")}>
              Далее, после общения с&nbsp;ним, мы&nbsp;составляем ИНДИВИДУАЛЬНЫЙ
              ОБРАЗОВАТЕЛЬНЫЙ МАРШРУТ конкретно для вас.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feature;
