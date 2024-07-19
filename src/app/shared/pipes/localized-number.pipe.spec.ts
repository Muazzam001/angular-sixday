import { LocalizedNumberPipe } from './localized-number.pipe';

describe('LocalizedNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizedNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
