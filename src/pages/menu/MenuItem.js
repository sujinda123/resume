import * as React from "react";
import { motion } from "framer-motion";
import styles from '../css/style.module.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF"];
const menus = ["home", "profile", "portfolio"];
const parts = ["/resume", "/profile", "/portfolio"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const textstyle = { color: `${colors[i]}`, fontSize:20 };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder} style={style} ></div>
      <div className={styles.textPlaceholder} style={textstyle} ><a href={parts[i]}><p style={{padding: 0, margin: 0, textTransform: "uppercase"}}>{menus[i]}</p></a></div>
    </motion.li>
  );
};
