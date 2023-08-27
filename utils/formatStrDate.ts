export default function formatStrDate(dateStrToFormat: string) {
  const [day, month, year] = dateStrToFormat
    .split("/")
    .map((timeUnit) => parseInt(timeUnit));

  const dateObj = new Date(`${month}/${day}/${year}`);
  return `${day} ${months[dateObj.getMonth()]}, ${year}`;
}

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
