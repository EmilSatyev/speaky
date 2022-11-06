import React from "react";
import styles from "./WhyWe.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const WhyWe = () => {
  return (
    <section className={styles.why_we}>
      <div className={cx("container", styles.why_we__container)}>
        <div className={styles.why_we__col}>
          <h2
            className={cx(
              "title",
              "title--h2",
              "title--marked",
            )}
          >
            Почему Speaky School?
          </h2>
          <div className={styles.why_we__descr}>
            <p className={cx("text")}>
              Ежегодно наши ученики успешно сдают международные экзамены,
              поступают в престижные российские и европейские учебные заведения.
            </p>
            <p className={cx("text")}>
              В нашей школе обучаются дети и родители, школьники и взрослые,
              бабушки и дедушки!
            </p>
          </div>
        </div>
        <div className={styles.why_we__col}>
          <ul className={styles.why_we__list}>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/connection.png)`,
                }}
              />
              <h3 className={cx("title", "title--h3")}>
                Преподаватели – носители языка
              </h3>
            </li>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/search.png)`,
                }}
              />
              <h3 className={cx("title", "title--h3")}>
                Онлайн и офлайн занятия
              </h3>
            </li>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/wenibar.png)`,
                }}
              />

              <h3 className={cx("title", "title--h3")}>
                Индивидуальные и групповые занятия
              </h3>
            </li>
          </ul>
        </div>
        <div className={styles.why_we__col}>
          <ul className={styles.why_we__list}>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/website.png)`,
                }}
              />
              <h3 className={cx("title", "title--h3")}>
                Все занятия исключительно на выбранном языке
              </h3>
            </li>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/online.png)`,
                }}
              />
              <h3 className={cx("title", "title--h3")}>
                Персональная программа обучения
              </h3>
            </li>
            <li className={styles.why_we__item}>
              <span
                className={styles.why_we__icon}
                style={{
                  backgroundImage: `url(/images/icons/advantages/graduate.png)`,
                }}
              />
              <h3 className={cx("title", "title--h3")}>
                Аккредитация международной организацией Edexel
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
