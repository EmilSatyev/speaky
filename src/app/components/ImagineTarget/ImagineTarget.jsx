import React from "react";
import styles from "./ImagineTarget.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

const ImagineTarget = () => {
  return (
    <section className={styles.root}>
      <div className={cx("container", styles.root__container)}>
        <div className={styles.root__wrapper}>
          <div className={styles.root__image}/>
          <div>
            <div className={styles.root__title_wrap}>
              <h2 className={cx("title", "title--h2", "title--marked")}>
                Давайте представим, какая у&nbsp;вас&nbsp;может быть цель?
              </h2>
            </div>
            <div className={styles.root__descr}>
              <p className={cx("text")}>
                Например, вы&nbsp;&mdash; свадебный организатор
                и&nbsp;большинство всех церемоний проходит за&nbsp;рубежом.
                Чтобы общаться с&nbsp;подрядчиками, выполнять свою работу
                эффективно и&nbsp;качественно, вам 100% нужен хороший язык.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagineTarget;
