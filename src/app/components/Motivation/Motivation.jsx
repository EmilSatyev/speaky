import React from "react";
import styles from "./Motivation.module.scss";
import cnBind from "classnames/bind";
import { Link } from "react-scroll";

const cx = cnBind.bind(styles);

const Motivation = ({ image, descr }) => {
  return (
    <section className={styles.motivation}>
      <div className={cx("container", styles.motivation__container)}>
        <div className={styles.motivation__wrap}>
          <div className={styles.motivation__content}>
            <div className={styles.motivation__info}>
              <div className={styles.motivation__title_wrap}>
                <h2 className={cx("title", "title--h2", "title--marked")}>
                  Выучить язык совсем несложно
                </h2>
              </div>
              {descr && <p className={cx("text", styles.motivation__text)}>{descr}</p>}

              <Link
                activeClass="active"
                smooth={true}
                offset={-50}
                duration={500}
                to="booking" className={cx("btn", styles.motivation__btn)}>Пробное занятие</Link>
            </div>
            <div
              className={styles.motivation__image}
              style={{ backgroundImage: `url(/images/${image})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
