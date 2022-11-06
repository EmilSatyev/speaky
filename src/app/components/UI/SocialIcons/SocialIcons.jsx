import React from 'react';
import styles from './SocialIcons.module.scss'
import cnBind from "classnames/bind";
import {SvgSelector} from "../../../helpers/svgSelector";

const cx = cnBind.bind(styles);


const SocialIcons = (props) => {
  return (
    <ul className={cx(styles.social, props.customClass)}>
      <li>
        <a href="src/App#">
          <SvgSelector name="fb" />
        </a>
      </li>
      <li>
        <a href="src/App#">
          <SvgSelector name="ins" />
        </a>
      </li>
      <li>
        <a href="src/App#">
          <SvgSelector name="whats" />
        </a>
      </li>
      <li>
        <a href="src/App#">
          <SvgSelector name="vk" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
