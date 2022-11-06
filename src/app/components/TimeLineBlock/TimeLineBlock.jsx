import React from 'react';
import styles from './TimeLineBlock.module.scss'
import cnBind from "classnames/bind";
import TimeLine from "../UI/TimeLine/TimeLine";

const cx = cnBind.bind(styles);


const TimeLineBlock = () => {
  return (
    <section className={styles.timeline_block}>
      <div className={cx("container", styles.timeline_block__container)}>
        <h2
          className={cx(
            "title",
            "title--h2",
            "title--marked",
          )}
        >
          История развития Speaky school
        </h2>
        <TimeLine customClass={styles.timeline_block__timeline} />
      </div>
    </section>
  );
};

export default TimeLineBlock;
