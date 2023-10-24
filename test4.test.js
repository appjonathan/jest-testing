const greet = require('./test4')

test('Überprüfung der personalisierten Grußnachricht mit einem Namen', () => {
    expect(greet('Christoph')).toBe('Hallo, Christoph! Willkommen zurück.');
  });
  
test('Überprüfung der personalisierten Grußnachricht mit einem anderen Namen', () => {
    expect(greet('Matze')).toBe('Hallo, Matze! Willkommen zurück.');
  });
  