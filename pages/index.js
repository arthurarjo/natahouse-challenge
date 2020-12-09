import StarshipCard from "components/StarshipCard";
import Input from "components/Input";
import Head from "next/head";
import { useState } from "react";
import { fetchAllStarships } from "services/api";

import styles from "styles/Home.module.css";

export default function Home({ ships }) {
  const [mglt, setMglt] = useState(null);

  const onChangeMGLT = (e) => {
    if (e.target.value) {
      setMglt(e.target.value);
    }
  };
  return (
    <>
      <div className={styles.header}>
        <h1>Find the best starship based on your distance</h1>
        <Input
          name="mglt"
          placeholder="MGLT"
          onChange={onChangeMGLT}
          type="number"
        />
      </div>
      <div className={styles.starshipList}>
        {ships.map((ship) => {
          const stops = Math.floor(mglt / (ship.mglt * ship.consumables));
          return (
            <StarshipCard
              key={ship.name}
              name={ship.name}
              mglt={ship.mglt}
              stops={stops}
            />
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const ships = await fetchAllStarships();

  return {
    props: { ships },
  };
}
