import React from 'react';
import styles from './LearnPath.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const LearnPath = () => {
  return (
    <section className={styles.learn_path}>
      <div className={cx("container", styles.learn_path__container)}>
        <ul className={styles.learn_path__list}>
          <li className={styles.learn_path__item}>
            <div className={styles.learn_path__item_wrap}>
              <div className={styles.learn_path__item_info}>
                <h3
                  className={cx(
                    "title",
                    "title--h3",
                    styles.learn_path__subtitle
                  )}
                >
                  Определяем текущий уровень и ставим цель
                </h3>
                <p className={cx(styles.learn_path__descr, "text")}>
                  Улучшение языковых навыков до уровня свободного общения в
                  определенной специфике (бизнес-английский).
                </p>
              </div>
              <div className={styles.learn_path__arrow}></div>
            </div>
          </li>
          <li className={styles.learn_path__item}>
            <div className={cx(styles.learn_path__item_wrap, "reverse")}>
              <div className={styles.learn_path__item_info}>
                <h3
                  className={cx(
                    "title",
                    "title--h3",
                    styles.learn_path__subtitle
                  )}
                >
                  Критерии успеха
                </h3>
                <p className={cx(styles.learn_path__descr, "text")}>
                  Определяем даты промежуточных итогов, где оценим успехи по
                  всем скилам. Что лично для вас будет являться успехом?
                  Когда вы сможете свободно выразить мысль? Не будете путать
                  слова? Напишите самостоятельно имейл?
                </p>
              </div>
              <div className={styles.learn_path__arrow}></div>
            </div>
          </li>
          <li className={styles.learn_path__item}>
            <div className={styles.learn_path__item_wrap}>
              <div className={styles.learn_path__item_info}>
                <h3
                  className={cx(
                    "title",
                    "title--h3",
                    styles.learn_path__subtitle
                  )}
                >
                  Достижимая цель
                </h3>
                <p className={cx(styles.learn_path__descr, "text")}>
                  Если мы определили стартовый уровень как Beginner, значит
                  наша реальная цель в короткий срок – Pre-Intermediate
                </p>
              </div>
              <div className={styles.learn_path__arrow}></div>
            </div>
          </li>
          <li className={styles.learn_path__item}>
            <div className={cx(styles.learn_path__item_wrap, "reverse")}>
              <div className={styles.learn_path__item_info}>
                <h3
                  className={cx(
                    "title",
                    "title--h3",
                    styles.learn_path__subtitle
                  )}
                >
                  Имеющая значение цель
                </h3>
                <p className={cx(styles.learn_path__descr, "text")}>
                  Что лично для вас изменится с появлением языковой
                  компетенции?
                </p>
              </div>
              <div className={styles.learn_path__arrow}></div>
            </div>
          </li>
          <li className={styles.learn_path__item}>
            <div className={styles.learn_path__item_wrap}>
              <div className={styles.learn_path__item_info}>
                <h3
                  className={cx(
                    "title",
                    "title--h3",
                    styles.learn_path__subtitle
                  )}
                >
                  Четкие сроки
                </h3>
                <p className={cx(styles.learn_path__descr, "text")}>
                  Когда вы хотите достигнуть этого уровня?
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LearnPath;
