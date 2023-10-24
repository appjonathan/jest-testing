const lowerCase = require('./test2')

test('Konvertierung eines ganzen Strings in Kleinbuchstaben', () => {
    expect(lowerCase('HELLO')).toBe('hello');
  });
  
  test('Konvertierung eines Strings mit gemischter Groß- und Kleinschreibung in Kleinbuchstaben', () => {
    expect(lowerCase('HeLlo')).toBe('hello');
  });  