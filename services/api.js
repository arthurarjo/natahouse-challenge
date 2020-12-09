import axios from "axios";
import { calculateConsumablesTime } from "helpers/starships";

const BASE_URL = "https://swapi.dev/api";

export const fetchAllStarships = async () => {
  try {
    const ships = [];

    let currentPage = 0;
    let hasMorePageAvailable = true;

    while (hasMorePageAvailable) {
      currentPage++;
      const response = await axios.get(
        `${BASE_URL}/starships?page=${currentPage}`
      );

      const {
        data: { results, next },
      } = response;

      results.map((ship) => {
        if (ship.MGLT != "unknown" && ship.consumables) {
          const consumables = calculateConsumablesTime(ship.consumables);
          ships.push({ mglt: ship.MGLT, name: ship.name, consumables });
        }
      });

      if (next === null) hasMorePageAvailable = false;
    }

    return ships;
  } catch (error) {
    console.error(error);
  }
};
