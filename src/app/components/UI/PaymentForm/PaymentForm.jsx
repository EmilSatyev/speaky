import React from "react";
import styles from "./PaymentForm.module.scss";
import cnBind from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { errorStyle } from "../../Booking/Booking";

const cx = cnBind.bind(styles);
const schema = yup.object({
  firstName: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  price: yup.number(),
});
const PaymentForm = ({ price, descr, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify({ ...data, descr, type }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <fieldset>
        <input
          style={errors.firstName && errorStyle}
          {...register("firstName")}
          type="text"
          placeholder="Имя"
        />
        <input
          style={errors.phone && errorStyle}
          {...register("phone")}
          name="phone"
          type="tel"
          placeholder="Номер телефона"
        />
        <input
          style={errors.email && errorStyle}
          {...register("email")}
          name="email"
          type="email"
          placeholder="Почта"
        />
        <div className={styles.root__price}>
          <input
            style={errors.price && errorStyle}
            {...register("price")}
            defaultValue={price}
            placeholder="Сумма платежа"
          />
        </div>
      </fieldset>
      <p className={styles.root__note}>
        Нажимая кнопку &laquo;Оплатить&raquo;, Вы&nbsp;соглашаетесь
        с&nbsp;условиями договора оферты и&nbsp;обработку персональных данных.
      </p>
      <button className={cx("btn")} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default PaymentForm;
