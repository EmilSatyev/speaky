import React from "react";
import { Dialog } from "@mui/material";
import cnBind from "classnames/bind";
import styles from "./PaymentModal.module.scss";

const cx = cnBind.bind(styles);

const PaymentModal = (props) => {
  const { onClose, open} = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      scroll="body"

      sx={{
        "& .MuiPaper-root": {
          maxWidth: "unset",
          borderRadius: "70px",
          "@media (max-width: 960px)":{
            borderRadius: "50px",
            margin: "10px"
          }
        },
      }}
    >
      <div className={styles.root}>
        <div className={styles.root__bg}>
          {[...Array(4)].map((_, id) => (
            <div
              key={id}
              style={{
                backgroundImage: `url(/images/frames/Frame${id + 5}.svg)`,
              }}
            ></div>
          ))}
        </div>
        <div className={styles.root__content}>
          <button onClick={handleClose} className={styles.root__close}>Закрыть</button>
          <h2 className={cx("title", "title--h2", styles.root__title)}>Оплата услуг</h2>
          {props.children}
        </div>
        <div className={styles.root__bg}>
          {[...Array(6)].map((_, id) => (
            <div
              key={id}
              style={{
                backgroundImage: `url(/images/frames/Frame${id + 9}.svg)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
