import React from "react";
import styles from "./Hero.module.scss";
import cnBind from "classnames/bind";
import { Link } from "react-scroll";

const cx = cnBind.bind(styles);

const Hero = ({ data }) => {
  const { title, image, descr } = data;
  return (
    <section className={styles.hero}>
      <div className={cx("container", styles.hero__container)}>
        <div className={styles.hero__left}>
          <h1 className={cx("title")}>{title}</h1>
          {descr && <p className={cx("text", styles.hero__text)}>{descr}</p>}
          <Link
            activeClass="active"
            smooth={true}
            offset={-50}
            duration={500}
            to="booking"
            className={cx("btn", styles.hero__btn)}
          >
            Пробное занятие
          </Link>
        </div>
        <div
          className={styles.hero__right}
          style={{ backgroundImage: `url(/images/${image})` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
