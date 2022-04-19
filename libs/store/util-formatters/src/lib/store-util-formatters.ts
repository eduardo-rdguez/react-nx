export function formatRating(rating: number): string {
  const format = Math.round(rating * 100) / 10;
  return `${format} / 10`;
}
