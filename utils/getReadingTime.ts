const allCharsExceptSpecialCharsRegex = /[\p{L}\d]+/gu;

export default function getReadingTime(markdown: string) {
  const AVG_CHARS_PER_MIN_HUMAN_SPEED = 1250;
  const match = markdown.match(allCharsExceptSpecialCharsRegex);
  const matchLength = getMatchLength(match);
  const speed = matchLength / AVG_CHARS_PER_MIN_HUMAN_SPEED;
  return formatReadingSpeed(speed);
}

function getMatchLength(match: RegExpMatchArray | null) {
  let matchLength = 0;
  if (match) {
    matchLength = match.reduce((acc, curr) => acc + curr).length;
  }

  return matchLength;
}

function formatReadingSpeed(speed: number): ReadingTime {
  if (speed > 1) {
    return {
      timeUnit: "min",
      value: Math.round(speed),
    };
  }

  const speedInSecs = Number(speed.toFixed(1)) * 60;
  return {
    timeUnit: "sec",
    value: speedInSecs,
  };
}
