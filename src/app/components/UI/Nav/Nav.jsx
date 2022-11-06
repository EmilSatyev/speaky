import React from "react";
import styles from "./Nav.module.scss";
import cnBind from "classnames/bind";
import { SvgSelector } from "../../../helpers/svgSelector";
import { Link, useLocation } from "react-router-dom";

const cx = cnBind.bind(styles);

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sublistRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    const handleClick = (e) => {
      if (sublistRef.current && !sublistRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isOpen]);
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li ref={sublistRef} className={cx(styles.nav__item, { open: isOpen })}>
          <span onClick={openHandler}>
            Обучение детей
            <SvgSelector name="down" />
          </span>
          <ul className={styles.nav__sublist}>
            <li className={styles.nav__subitem}>
              <Link to="child_online">Онлайн-занятия</Link>
            </li>
            <li className={styles.nav__subitem}>
              <Link to="child_offline">Занятия в клубе</Link>
            </li>
          </ul>
        </li>
        <li className={styles.nav__item}>
          <Link to="adult">Обучение взрослых</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
