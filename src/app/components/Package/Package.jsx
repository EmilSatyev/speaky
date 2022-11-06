import React from "react";
import styles from "./Package.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const Package = ({children}) => {
  return (
    <div className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div className={styles.root__title_wrap}>
          <h2 className={cx("title", "title--h2", "title--marked")}>
            Пакеты обучения
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Package;
