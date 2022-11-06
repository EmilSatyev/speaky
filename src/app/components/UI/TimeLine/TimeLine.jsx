import React from "react";
import styles from "./TimeLine.module.scss";
import cnBind from "classnames/bind";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


const cx = cnBind.bind(styles);

const timelineData = [
  {
    id: 0,
    year: 2019,
    descr: "Открытие языковых лагерей для взрослых и детей",
    urlImage: "timeline.jpg",
  },
  {
    id: 1,
    year: 2020,
    descr: "Открытие языковых лагерей для взрослых и детей",
    urlImage: "timeline.jpg",
  },
  {
    id: 2,
    year: 2021,
    descr: "Открытие языковых лагерей для взрослых и детей",
    urlImage: "timeline.jpg",
  },
  {
    id: 3,
    year: 2022,
    descr: "Открытие языковых лагерей для взрослых и детей",
    urlImage: "timeline.jpg",
  },
];

export default function TimeLine(props) {
  const [swiperInstance, setSwiperInstance] = React.useState(null);
  const [slide, setSlide] = React.useState(2);

  const handleExternalChangeSlide = (newSlideIndexToShow) => {
    swiperInstance.slideTo(newSlideIndexToShow);
  };

  return (
    <div className={cx(styles.timeline, props.customClass)}>
      <div className={styles.timeline__line}>
        {timelineData.map((t) => (
          <div
            key={t.id}
            onClick={() => handleExternalChangeSlide(t.id)}
            className={cx(styles.timeline__step, {
              active: t.id === slide,
            })}
          >
            <span className={styles.timeline__label}>{t.year}</span>
            <div className={styles.timeline__dot}></div>
          </div>
        ))}
      </div>

      <Swiper
        spaceBetween={30}
        onSwiper={setSwiperInstance}
        onSlideChange={({ realIndex }) => setSlide(realIndex)}
        initialSlide={slide}
        className="mySwiper"
      >
        {timelineData.map((t) => (
          <SwiperSlide key={t.id}>
            <div className={styles.timeline__slide}>
              <div className={styles.timeline__image}>
                <img src="/images/timeline.jpg" alt="" />
              </div>
              <div className={styles.timeline__info}>
                <h2 className={cx("title", "title--h2", styles.timeline__title)}>{t.year}</h2>
                <p className={"text"}>{t.descr}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
