/**
 *
 * @param dates string date in format "dd/mm/year" (leading zeros allowed)
 */
export default function strDatesToMsDates(dates: string[]) {
  return dates.map((date) => {
    const [day, month, year] = date
      .split("/")
      .map((timeUnit) => parseInt(timeUnit));

    const formattedDate = `${month}/${day}/${year}`;
    return new Date(formattedDate).getTime();
  });
}
