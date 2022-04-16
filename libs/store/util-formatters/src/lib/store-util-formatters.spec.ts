import { formatRating } from './store-util-formatters';

describe('formatRating', () => {
  it('should work', () => {
    expect(formatRating(0.9773552984898748)).toEqual('9.8 / 10');
  });
});
