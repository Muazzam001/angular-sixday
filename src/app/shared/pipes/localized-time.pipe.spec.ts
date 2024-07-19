import { LocalizedTimePipe } from './localized-time.pipe';

describe('LocalizedTimePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizedTimePipe();
    expect(pipe).toBeTruthy();
  });
});
