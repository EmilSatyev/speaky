import React from "react";
import styles from "./Audience.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const data = {
  homePage: [
    {
      id: 1,
      title: "Обучение взрослых",
      image: "adult.jpg",
    },
    {
      id: 2,
      title: "Обучение детей",
      image: "child.jpg",
    },
  ],
  adultPage: [
    {
      id: 1,
      title: "для работы",
      image: "for-work.jpg",
    },
    {
      id: 2,
      title: "для\xa0себя",
      image: "for-me.jpg",
    },
    {
      id: 3,
      title: "для путешествий",
      image: "for-trip.jpg",
    },
  ],
};

const Audience = ({ page }) => {
  return (
    <section className={styles.audience}>
      <div className={cx("container", styles.audience__container)}>
        <ul className={styles.audience__list}>
          {data[page].map((item) => (
            <li
              key={item.id}
              className={styles.audience__item}
              style={{ backgroundImage: `url("/images/${item.image}")` }}
            >
              <div className={styles.audience__title_wrap}>
                <h2 className={cx("title", "title--h2", "title--marked")}>
                  {item.title}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Audience;
