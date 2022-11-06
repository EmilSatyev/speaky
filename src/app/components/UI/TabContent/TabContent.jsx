import React from "react";
import styles from "./TabContent.module.scss";
import cnBind from "classnames/bind";
import PaymentModal from "../PaymentModal/PaymentModal";
import PaymentForm from "../PaymentForm/PaymentForm";

const cx = cnBind.bind(styles);

const data = {
  individual30: [
    {
      id: 1,
      descr: "4 занятия по 30 мин",
      price: 3400,
      images: ["Frame9.svg", "Frame10.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 30 мин",
      price: 6800,
      images: ["Frame12.svg", "Frame11.svg"],
    },
    {
      id: 3,
      descr: "12 занятий по 30 мин",
      price: 10200,
      images: ["Frame14.svg", "Frame13.svg"],
    },
  ],
  individual60: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 5400,
      images: ["Frame16.svg", "Frame15.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 60 мин",
      price: 10800,
      images: ["Frame18.svg", "Frame17.svg"],
    },
    {
      id: 3,
      descr: "12 занятий по 60 мин",
      price: 16200,
      images: ["Frame20.svg", "Frame19.svg"],
    },
  ],
  club: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 5400,
      images: ["Frame22.svg", "Frame21.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 60 мин",
      price: 10800,
      images: ["Frame16.svg", "Frame18.svg"],
    },
  ],
  individualChildOffline: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 8800,
      images: ["Frame9.svg", "Frame10.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 60 мин",
      price: 17600,
      images: ["Frame12.svg", "Frame11.svg"],
    },
  ],
  groupChildOffline: [
    {
      id: 1,
      descr: "4 занятия по 45-60 мин*",
      price: 4300,
      images: ["Frame16.svg", "Frame15.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 45-60 мин*",
      price: 7900,
      images: ["Frame18.svg", "Frame17.svg"],
    },
    {
      id: 3,
      descr: "12 занятий по 45-60 мин*",
      price: 11850,
      images: ["Frame20.svg", "Frame19.svg"],
    },
  ],
  clubChildOffline: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 3600,
      images: ["Frame22.svg", "Frame21.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 60 мин",
      price: 6800,
      images: ["Frame16.svg", "Frame18.svg"],
    },
  ],
  individualAdultOffline: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 9600,
      images: ["Frame9.svg", "Frame10.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 60 мин",
      price: 14400,
      images: ["Frame12.svg", "Frame11.svg"],
    },
  ],
  groupAdultOffline: [
    {
      id: 1,
      descr: "4 занятия по 45-60 мин",
      price: 4900,
      images: ["Frame16.svg", "Frame15.svg"],
    },
    {
      id: 2,
      descr: "8 занятий по 45-60 мин",
      price: 8900,
      images: ["Frame18.svg", "Frame17.svg"],
    },
    {
      id: 3,
      descr: "12 занятий по 45-60 мин",
      price: 13200,
      images: ["Frame20.svg", "Frame19.svg"],
    },
  ],
  clubAdultOffline: [
    {
      id: 1,
      descr: "4 занятия по 60 мин",
      price: 4300,
      images: ["Frame22.svg", "Frame21.svg"],
    },
    {
      id: 2,
      descr: "4 занятий по 90 мин",
      price: 6900,
      images: ["Frame16.svg", "Frame18.svg"],
    },
  ],
};

const TabContent = ({ name }) => {
  const [open, setOpen] = React.useState(false);
  const chosenEducationDataRef = React.useRef({});

  const handleClickOpen = (data) => {
    setOpen(true);
    chosenEducationDataRef.current = {
      price: data.price,
      descr: data.descr,
      type: name,
    };
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      {data[name].map((item) => (
        <div key={item.id} className={styles.root__card}>
          <div className={styles.root__images}>
            {item.images.map((image) => (
              <div
                key={image}
                style={{ backgroundImage: `url(/images/frames/${image})` }}
              />
            ))}
          </div>
          <div className={styles.root__info}>
            <h3 className={cx("title", "title--h3", styles.root__title)}>
              {item.descr}
            </h3>
            <span className={styles.root__price}>{item.price}</span>
            <button
              onClick={() => handleClickOpen({...item})}
              className={cx("btn")}
            >
              Выбрать
            </button>
            {name === "groupChildOffline" && (
              <span className={styles.root__note}>
                *зависит от возраста ребёнка
              </span>
            )}
          </div>
        </div>
      ))}
      <PaymentModal open={open} onClose={handleClose}>
        <PaymentForm {...chosenEducationDataRef.current} />
      </PaymentModal>
    </div>
  );
};

export default TabContent;
