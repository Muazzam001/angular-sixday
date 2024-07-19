import { LocalizedDateTimePipe } from './localized-date-time.pipe';

describe('LocalizedDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizedDateTimePipe();
    expect(pipe).toBeTruthy();
  });
});
