const ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export function formaDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;

  if (hours > 0) {
    return `${hours}:${ZERO_FORMATTER.format(minutes)}:${ZERO_FORMATTER.format(
      seconds,
    )}`;
  }
  return `${minutes}:${ZERO_FORMATTER.format(seconds)}`;
}
