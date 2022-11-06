import React from "react";
import styles from "./Header.module.scss";
import cnBind from "classnames/bind";
import Nav from "../UI/Nav/Nav";
import { SvgSelector } from "../../helpers/svgSelector";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import ContactList from "../UI/ContactList/ContactList";
import {Link, useLocation} from "react-router-dom";


const cx = cnBind.bind(styles);

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={cx("container", styles.header__container)}>
        <Link to="/" className={cx(styles.header__logo)}>
          <img src="/images/logo.png" alt="Логотип" />
        </Link>
        <div className={styles.header__right}>
          <Nav />
          <SocialIcons customClass={styles.header__social} />
          <button>
            <SvgSelector name="phone" />
          </button>
        </div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={cx(styles.menu_btn, styles.header__menu_btn)}
        >
          <SvgSelector name="menu" />
        </button>
        <div
          className={cx(styles.header__drawer, styles.drawer, {
            open: isDrawerOpen,
          })}
        >
          <div className={cx(styles.drawer__container, "container")}>
            <div className={styles.drawer__header}>
              <Link to="/" className={styles.drawer__logo}>
                <img src="/images/logo.png" alt="Логотип" />
              </Link>
              <button
                className={styles.drawer__btn}
                onClick={() => setIsDrawerOpen(false)}
              >
                <SvgSelector name="close" />
              </button>
            </div>
            <div className={styles.drawer__body}>
              <nav>
                <ul className={styles.drawer__list}>
                  <li className={styles.drawer__item}>
                    <Link to="child_online">Обучение детей онлайн</Link>
                  </li>
                  <li className={styles.drawer__item}>
                    <Link to="child_offline">Обучение детей оффлайн</Link>
                  </li>
                  <li className={styles.drawer__item}>
                    <Link to="adult">Обучение взрослых</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.drawer__soc}>
                <SocialIcons />
                <button>
                  <SvgSelector name="phone" />
                </button>
              </div>
              <ContactList customClass={styles.drawer__contact} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
