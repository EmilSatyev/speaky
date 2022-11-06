import React from "react";
import styles from "./ComeToUs.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const ComeToUs = () => {
  return (
    <div className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div className={styles.root__title_wrap}>
          <h2 className={cx("title", "title--h2", "title--marked")}>
            Придя к нам, ваш ребенок:
          </h2>
        </div>
        <ul className={styles.root__list}>
          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{
                backgroundImage: `url(/images/icons/come_to_us/art.png)`,
              }}
            />
            <p className={cx("text")}>
              Полностью погрузится в&nbsp;языковую среду, так как все занятия
              у&nbsp;нас проходят только на&nbsp;изучаемом языке
            </p>
          </li>

          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{
                backgroundImage: `url(/images/icons/come_to_us/elearning.png)`,
              }}
            />
            <p className={cx("text")}>
              Будет обучаться по&nbsp;персональному образовательному маршруту,
              выстроенному исходя из&nbsp;его интересов и&nbsp;особенностей
            </p>
          </li>

          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{
                backgroundImage: `url(/images/icons/come_to_us/login.png)`,
              }}
            />
            <p className={cx("text")}>Сдаст международный экзамен</p>
          </li>

          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{
                backgroundImage: `url(/images/icons/come_to_us/desk.png)`,
              }}
            />
            <p className={cx("text")}>Выучит язык для живого общения</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComeToUs;
