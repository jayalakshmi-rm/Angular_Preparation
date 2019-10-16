import { CamelCasePipe } from './camel-case.pipe';

describe('SqrtPipe', () => {
  it('create an instance', () => {
    const pipe = new CamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
