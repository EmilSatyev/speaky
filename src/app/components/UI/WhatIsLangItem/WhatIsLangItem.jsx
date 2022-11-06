import React, { useEffect } from "react";
import styles from "./WhatIsLangItem.module.scss";

export function WhatIsLangItem({ title, filter, customClass }) {
  const [bdWidth, setBdWidth] = React.useState(0);
  const refSpan = React.useRef();

  useEffect(() => {
    async function isReady() {
      let ready = await document.fonts.ready;
      if (ready.status === "loaded" && bdWidth === 0) {
        let spanWidth = refSpan.current.offsetWidth;
        spanWidth -= spanWidth % 6;
        setBdWidth(spanWidth);
      }
    }

    isReady();
  }, [bdWidth]);

  return (
    <li className={customClass}>
      <span
        ref={refSpan}
        style={{ width: bdWidth !== 0 ? `${bdWidth}px` : "auto" }}
      >
        {title}
        <span className={styles.root__border} style={{filter: `${filter}`}}/>
      </span>
    </li>
  );
}
