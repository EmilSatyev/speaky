import React from 'react';
import styles from './Languages.module.scss'
import cnBind from "classnames/bind";
import {SvgSelector} from "../../helpers/svgSelector";

const cx = cnBind.bind(styles);


const Languages = ({title}) => {
  return (
    <section className={styles.languages}>
      <div className={cx("container", styles.languages__container)}>
        <div className={styles.languages__wrapper}>
          <div>
            <h2
              className={cx(
                "title",
                "title--h2",
                "title--marked",
                styles.languages__title
              )}
            >
              {title}
            </h2>
            <ul className={styles.languages__list}>
              <li className={styles.languages__item}>
                <SvgSelector name="uk" />
                <h3 className={cx("title", "title--h3")}>Английский</h3>
              </li>
              <li className={styles.languages__item}>
                <SvgSelector name="germany" />
                <h3 className={cx("title", "title--h3")}>Немецкий</h3>
              </li>
              <li className={styles.languages__item}>
                <SvgSelector name="spain" />
                <h3 className={cx("title", "title--h3")}>Испанский</h3>
              </li>
              <li className={styles.languages__item}>
                <SvgSelector name="france" />
                <h3 className={cx("title", "title--h3")}>Французский</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
