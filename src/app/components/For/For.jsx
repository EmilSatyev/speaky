import React from 'react';
import styles from './For.module.scss'
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);


const For = () => {
  return (
    <section className={styles.for}>
      <div className={cx("container", styles.for__container)}>
        <div className={styles.for__item}>
          <div
            className={styles.for__image}
            style={{ backgroundImage: "url(/images/for-child.jpg)" }}
          />
          <div className={styles.for__info_wrap}>
            <div className={styles.for__info}>
              <h2 className={cx("title", "title--h2", "title--marked")}>
                Для детей
              </h2>
              <div className={styles.for__lists_wrap}>
                <div className={styles.for__list_col}>
                  <h3 className={cx("title", "title--h3")}>Онлайн</h3>
                  <ul className={styles.for__list}>
                    <li className={styles.for__list_item}>
                      адаптированная под ребёнка программа
                    </li>
                    <li className={styles.for__list_item}>
                      гибкое расписание
                    </li>
                    <li className={styles.for__list_item}>
                      занятия в привычной обстановке
                    </li>
                    <li className={styles.for__list_item}>
                      динамичные занятия по 30-40 минут
                    </li>
                  </ul>
                </div>
                <div className={styles.for__list_col}>
                  <h3 className={cx("title", "title--h3")}>Офлайн</h3>
                  <ul className={styles.for__list}>
                    <li className={styles.for__list_item}>
                      занятия в нашей школе в г. Троицке
                    </li>
                    <li className={styles.for__list_item}>
                      удобное расписание
                    </li>
                    <li className={styles.for__list_item}>
                      живое общение со сверстниками
                    </li>
                    <li className={styles.for__list_item}>
                      увлекательные занятия в небольших группах
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles.for__item, styles.for__reverse)}>
          <div
            className={styles.for__image}
            style={{ backgroundImage: "url(/images/for-adult.jpg)" }}
          />
          <div className={styles.for__info}>
            <h2 className={cx("title", "title--h2", "title--marked")}>
              Для взрослых
            </h2>
            <div className={styles.for__lists_wrap}>
              <div className={styles.for__list_col}>
                <h3 className={cx("title", "title--h3")}>Онлайн</h3>
                <ul className={styles.for__list}>
                  <li className={styles.for__list_item}>
                    занятия в нашей школе в г. Троицке
                  </li>
                  <li className={styles.for__list_item}>
                    удобное расписание
                  </li>
                  <li className={styles.for__list_item}>
                    уютная атмосфера
                  </li>
                  <li className={styles.for__list_item}>
                    индивидуальные или групповые занятия
                  </li>
                </ul>
              </div>
              <div className={styles.for__list_col}>
                <h3 className={cx("title", "title--h3")}>Офлайн</h3>
                <ul className={styles.for__list}>
                  <li className={styles.for__list_item}>
                    занятия из любой точки в удобное время
                  </li>
                  <li className={styles.for__list_item}>
                    персональная программа
                  </li>
                  <li className={styles.for__list_item}>
                    гибкое расписание
                  </li>
                  <li className={styles.for__list_item}>
                    преодоление языкового барьера
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default For;
