import React from "react";

import styles from "./ReachResult.module.scss";
import cnBind from "classnames/bind";
import "simplebar-react/dist/simplebar.min.css";

const cx = cnBind.bind(styles);

const ReachResult = () => {
  return (
    <section className={styles.result}>
      <div className={cx("container", styles.result__container)}>
        <div className={styles.result__title_wrap}>
          <h2 className={cx("title", "title--h2", "title--marked")}>
            Результата достигаем за счет:
          </h2>
        </div>

        <ul className={styles.result__list}>
          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/books.png)",
              }}
            />
            <p className={styles.result__descr}>
              языковой цели для каждого студента и&nbsp;срока достижения цели
            </p>
          </li>
          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/device.png)",
              }}
            />
            <p className={styles.result__descr}>
              максимального погружения в&nbsp;языковую среду с&nbsp;носителями
              языка
            </p>
          </li>

          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/brain.png)",
              }}
            />
            <p className={styles.result__descr}>
              грамматики, письма, чтения, аудирования на&nbsp;каждом уроке
            </p>
          </li>

          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/innovation.png)",
              }}
            />
            <p className={styles.result__descr}>
              заданийна основе интересов и&nbsp;увлечений детей
            </p>
          </li>

          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/audiobook.png)",
              }}
            />
            <p className={styles.result__descr}>
              обратной связи с&nbsp;родителями каждые 8-10 занятий
              с&nbsp;промежуточными тестами
            </p>
          </li>

          <li className={styles.result__item}>
            <span
              className={styles.result__icon}
              style={{
                backgroundImage: "url(/images/icons/result/network.png)",
              }}
            />
            <p className={styles.result__descr}>
              чёткого тайминга занятий и&nbsp;контроля результатов
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ReachResult;
