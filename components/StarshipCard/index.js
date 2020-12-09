import React from "react";

import Image from "next/image";

import styles from "./StarshipCard.module.css";

const StarshipCard = ({ name, mglt, stops }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardInner}>
        <Image
          src="/assets/images/carbon_rocket.png"
          alt={name}
          width={50}
          height={50}
        />
        <h3>{name}</h3>
        <h4>MGLT: {mglt}</h4>
        <h4>STOPS: {stops}</h4>
      </div>
    </div>
  );
};

export default StarshipCard;
