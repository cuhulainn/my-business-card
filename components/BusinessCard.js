import React from "react";
import Image from "next/image";
import { HiPhone, HiMail, HiGlobeAlt } from "react-icons/hi";
import styles from "../styles/BusinessCard.module.css";
import headshot from "../public/headshot.jpg";

const BusinessCard = () => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.contentContainer}>
            <h1>Connor McGinn</h1>
            <h2>Full Stack Web Developer</h2>
            <hr />
            <h3>
              <HiPhone /> +1 314 472 3542
            </h3>
            <h3> +55 31 98287-2332</h3>
            <h3>
              <HiMail />
              connor.mcginn@gmail.com
            </h3>
            <h3>
              <HiGlobeAlt />
              (GMT-3) Nova Lima, MG, Brasil
            </h3>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.contentContainer}>
            <Image
              src={headshot}
              alt="Connor headshot"
              height={75}
              width={75}
              className="headshot"
            />
            <h3>Open to freelance and other opportunities!</h3>
            <h4>2 years professional experience</h4>
            <h4>Skilled with React + Java</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
