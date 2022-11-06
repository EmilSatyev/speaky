import React from "react";
import styles from "./Booking.module.scss";
import cnBind from "classnames/bind";
import SelectLanguage from "../UI/SelectLanguage/SelectLanguage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const cx = cnBind.bind(styles);

export const errorStyle = {
  borderColor: "var(--error)",
};

const getRequiredFields = (bool) => {
  let obj = {
    firstName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
  };
  if (bool) {
    obj = {
      ...obj,
      age: yup.string().required(),
      childName: yup.string().required(),
    };
  }

  return yup.object(obj);
};

const Booking = () => {
  const [isForChild, setIsForChild] = React.useState(false);
  const now = new Date().getTime();

  const resolverRef = React.useRef(getRequiredFields(isForChild));

  const {
    register,
    unregister,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resolverRef.current),
  });


  React.useEffect(() => {
    resolverRef.current = getRequiredFields(isForChild);
    if (!isForChild) {
      unregister("age", { keepValue: false });
      unregister("childName", { keepValue: false });
    }
  }, [isForChild, unregister]);


  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section id="booking" className={styles.booking}>
      <div className={cx("container", styles.booking__container)}>
        <div className={styles.booking__wrap}>
          <h2 className={cx("title", "title--h2", styles.booking__title)}>
            Записаться на пробное занятие
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.booking__form}
          >
            <fieldset className={styles.booking__radio}>
              <div
                onClick={() => setIsForChild(false)}
                className={styles.booking__adultOrChildRadio}
              >
                <input
                  defaultChecked
                  type="radio"
                  id={`adult${now}`}
                  name="audience"
                  value="Взрослые"
                  {...register("audience")}
                />
                <label htmlFor={`adult${now}`}>Взрослые</label>
              </div>
              <div
                onClick={() => setIsForChild(true)}
                className={styles.booking__adultOrChildRadio}
              >
                <input
                  type="radio"
                  id={`child${now}`}
                  name="audience"
                  value="Дети и подростки"
                  {...register("audience")}
                />
                <label htmlFor={`child${now}`}>Дети и подростки</label>
              </div>
            </fieldset>
            <fieldset>
              <SelectLanguage
                control={control}
                name="language"
                id="select-language"
                defaultValue="Английский"
              />
            </fieldset>
            <fieldset
              className={cx(styles.booking__radio, styles.booking__education)}
            >
              <div className={styles.booking__education_type}>
                <input
                  defaultChecked
                  type="radio"
                  id={`online${now}`}
                  name="education-type"
                  value="Онлайн-занятия"
                  {...register("education")}
                />
                <label htmlFor={`online${now}`}>Онлайн-занятия</label>
              </div>
              <div className={styles.booking__education_type}>
                <input
                  type="radio"
                  id={`offline${now}`}
                  name="education-type"
                  value="Занятия в клубе"
                  {...register("education")}
                />
                <label htmlFor={`offline${now}`}>Занятия в клубе</label>
              </div>
            </fieldset>
            <fieldset className={styles.booking__simple_inputs}>
              <input
                style={errors.firstName && errorStyle}
                {...register("firstName")}
                type="text"
                placeholder="Имя"
              />
              <input
                style={errors.phone && errorStyle}
                {...register("phone")}
                type="tel"
                placeholder="Телефон"
              />
              {isForChild && (
                <>
                  <input
                    style={errors.childName && errorStyle}
                    {...register("childName")}
                    type="text"
                    placeholder="Имя ребенка"
                  />
                  <input
                    style={errors.age && errorStyle}
                    {...register("age")}
                    type="number"
                    placeholder="Возраст"
                  />
                </>
              )}
              <input
                style={errors.email && errorStyle}
                {...register("email")}
                type="email"
                placeholder="Почта"
              />
            </fieldset>
            <button className={cx("btn")} type="submit">
              Отправить
            </button>
          </form>
          <div className={styles.booking__image}>
            {[...Array(10)].map((_, id) => (
              <div
                key={id}
                style={{
                  backgroundImage: `url(/images/frames/Frame${id + 1}.svg)`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
