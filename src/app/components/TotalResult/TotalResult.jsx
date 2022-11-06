import React from "react";
import styles from "./TotalResult.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const TotalResult = () => {
  return (
    <section className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div>
          <div>
            <h2 className={cx("title", "title--h2", "title--marked")}>Итог:</h2>
          </div>
          <div className={styles.root__descr}>
            <p className={cx("text")}>
              Все ваши занятия будут выстроены исходя из&nbsp;профессиональных
              интересов, таким образом:
            </p>
          </div>
        </div>
        <ul className={styles.root__list}>
          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{ backgroundImage: "url(/images/icons/elearning.png)" }}
            />
            отобразим рабочие сценарии
          </li>
          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{ backgroundImage: "url(/images/icons/devices.png)" }}
            />
            выучим специальный вокабуляр
          </li>
          <li className={styles.root__item}>
            <span
              className={styles.root__icon}
              style={{ backgroundImage: "url(/images/icons/ebook.png)" }}
            />
            погрузим вас в рабочую, при этом языковую среду
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TotalResult;
