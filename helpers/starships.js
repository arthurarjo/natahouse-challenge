export function calculateConsumablesTime(consumable) {
  const consumables = consumable.split(" ");
  let t = 0;

  switch (consumables[1]) {
    case "days":
    case "day":
      t = parseInt(consumables[0]) * 24;
      break;
    case "weeks":
    case "week":
      t = parseInt(consumables[0]) * 168;
      break;
    case "months":
    case "month":
      t = parseInt(consumables[0]) * 730;
      break;
    case "years":
    case "year":
      t = parseInt(consumables[0]) * 8760;
      break;
    default:
      t = 0;
      break;
  }

  return t;
}
