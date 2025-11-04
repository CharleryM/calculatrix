const { compute } = require('../services/calcules');

describe('Service calcules', () => {
  test('addition', () => {
    expect(compute(2, 3, '+')).toBe(5);
  });

  test('soustraction', () => {
    expect(compute(5, 2, '-')).toBe(3);
  });

  test('multiplication', () => {
    expect(compute(3, 4, '*')).toBe(12);
  });

  test('division', () => {
    expect(compute(10, 2, '/')).toBe(5);
  });

  test('division par zéro', () => {
    expect(() => compute(10, 0, '/')).toThrow('Division par zéro');
  });

  test('opérateur inconnu', () => {
    expect(() => compute(2, 3, '?')).toThrow('Opérateur non supporté');
  });

  test('valeurs invalides', () => {
    expect(() => compute('a', 3, '+')).toThrow('Nombre invalide');
  });
});
