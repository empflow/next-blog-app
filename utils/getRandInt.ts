export default function getRandInt(rangeMin: number, rangeMax: number) {
  return Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;
}
