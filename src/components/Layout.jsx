import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.css";

const Layout = ({ children, footer, pageHeading }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href="https://www.yarmonics.com/" passHref>
          <header className={styles.logoWrapper}>
            <Image
              src={"/yarmonicsLogo.jpg"}
              alt="Yarmonics home page"
              width={234}
              height={65.42}
            />
            <h1 className={styles.visuallyHidden}>{pageHeading}</h1>
          </header>
        </Link>
      </div>
      <div className={styles.contentWrapper}>{children}</div>
      {footer && <div className={styles.footer} />}
    </div>
  );
};

export default Layout;
