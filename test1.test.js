const add = require('./test1')

test('Addition von zwei Zahlen', () => {
    expect(add(2, 3)).toBe(5);
  });

test('Addition von zwei negativen Zahlen', () => {
    expect(add(-2, -3)).toBe(-5);
  });