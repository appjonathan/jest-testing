const isEven = require('./test3')

test('Überprüfung, ob eine gerade Zahl als gerade erkannt wird', () => {
    expect(isEven(4)).toBe(true);
  });
  
test('Überprüfung, ob eine ungerade Zahl als ungerade erkannt wird', () => {
    expect(isEven(7)).toBe(false);
  });
  