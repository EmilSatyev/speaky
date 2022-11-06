import React from "react";
import styles from "./WhatIsLanguage.module.scss";
import cnBind from "classnames/bind";
import { WhatIsLangItem } from "../UI/WhatIsLangItem/WhatIsLangItem";

const cx = cnBind.bind(styles);

const data = [
  {
    id: 1,
    title: "Навыки",
    filter:
      "invert(33%) sepia(13%) saturate(2213%) hue-rotate(129deg) brightness(94%) contrast(81%)",
  },
  {
    id: 2,
    title: "Культурная среда",
    filter:
      "invert(52%) sepia(10%) saturate(3087%) hue-rotate(315deg) brightness(108%) contrast(99%)",
  },
  {
    id: 3,
    title: "Жизненные ценности",
    filter:
      "invert(61%) sepia(59%) saturate(910%) hue-rotate(327deg) brightness(104%) contrast(98%)",
  },
  {
    id: 4,
    title: "Знания",
    filter:
      "invert(61%) sepia(59%) saturate(910%) hue-rotate(327deg) brightness(104%) contrast(98%)",
  },
  {
    id: 5,
    title: "Языковая среда",
    filter:
      "invert(79%) sepia(44%) saturate(1061%) hue-rotate(359deg) brightness(103%) contrast(98%)",
  },
  {
    id: 6,
    title: "Дружественная атмосфера",
    filter:
      "invert(26%) sepia(99%) saturate(1794%) hue-rotate(166deg) brightness(94%) contrast(98%)",
  },
];

const WhatIsLanguage = ({ image }) => {
  return (
    <section className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div className={styles.root__content}>
          <div
            className={styles.root__image}
            style={{ backgroundImage: `url(/images/${image})` }}
          />
          <div>
            <div className={styles.root__title_wrap}>
              <h2 className={cx("title", "title--h2", "title--marked")}>
                Что такое иностранные языки для нас?
              </h2>
            </div>

            <ul className={styles.root__list}>
              {data.map((item) => (
                <WhatIsLangItem
                  key={item.id}
                  customClass={styles.root__item}
                  {...item}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLanguage;
