import React, { useState } from "react";
import styles from "./NavbarWithStyling.module.css";
import About from "../about/About";

const NavbarWithStyling = ({ menu, name, age, address }) => {
  // const [list, setList] = useState("");
  let list;

  if (menu) {
    list = (
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>{menu[0]}</li>
        <li className={styles.navbarItem}>{menu[1]}</li>
        <li className={styles.navbarItem}>{menu[2]}</li>
      </ul>
    );
  } else {
    list = <h1>List not found</h1>;
  }

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.navbarTitle}>FSW 2 - {name}</h1>
        {list}
      </div>
      <About name={name} age={age} address={address} />
    </>
  );
};

export default NavbarWithStyling;
