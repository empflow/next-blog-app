export default function formatStrDate(dateStrToFormat: string) {
  const [day, month, year] = dateStrToFormat
    .split("/")
    .map((timeUnit) => parseInt(timeUnit));

  const dateObj = new Date(`${month}/${day}/${year}`);
  return `${months[dateObj.getMonth()]} ${day}, ${year}`;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
