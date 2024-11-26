export function formatNumber(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  if (number >= 1e9) {
    return `${formatter.format(number / 1e9)}B`;
  } else if (number >= 1e6) {
    return `${formatter.format(number / 1e6)}M`;
  } else if (number >= 1e3) {
    return `${formatter.format(number / 1e3)}K`;
  } else {
    return formatter.format(number);
  }
}
