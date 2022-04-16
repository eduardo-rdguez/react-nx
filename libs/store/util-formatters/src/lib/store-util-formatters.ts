export function formatRating(rating: number): string {
  let format = Math.round(rating * 100) / 10;
  return `${format} / 10`;
}
