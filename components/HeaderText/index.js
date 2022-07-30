import Link from "next/link";
import React from "react";
import styles from "./HeaderText.module.css";

const HeaderText = () => {
  return (
    <Link href="/">
      <div className={styles.waviy}>
        <span style={{ "--i": 1 }}>D</span>
        <span style={{ "--i": 2 }}>ó</span>
        <span style={{ "--i": 3 }}>r</span>
        <span style={{ "--i": 4, "margin-right": 20 }}>i</span>
        <span></span>
        <span> </span>
        <span style={{ "--i": 5 }}>é</span>
        <span style={{ "--i": 6, "margin-right": 20 }}>s</span>
        <span> </span>
        <span> </span>
        <span style={{ "--i": 7 }}>H</span>
        <span style={{ "--i": 8 }}>a</span>
        <span style={{ "--i": 9 }}>n</span>
        <span style={{ "--i": 10 }}>s</span>
        <span style={{ "--i": 11 }}>i</span>
      </div>
    </Link>
  );
};

export default HeaderText;
