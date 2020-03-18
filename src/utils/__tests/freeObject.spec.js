import freezeObject from '../freezeObject';

describe('src::utils::freezeObject', () => {
  test('Takes strings as arugments and freezes them', () => {
    const items = freezeObject(false, 'A', 'B', 'C');
    const a = {A: 'A'};
    const b = {B: 'B'};
    const c = {C: 'C'};

    expect(items.A).toEqual(a.A);
    expect(items.B).toEqual(b.B);
    expect(items.C).toEqual(c.C);
  });

  test('Takes strings as arguments and freezes them as symbols', () => {
    const items = freezeObject(true, 'A', 'B', 'C');
    const a = Symbol('A');
    const b = Symbol('B');
    const c = Symbol('C');

    // Symbols can't === each other. New symbols are created instead.
    expect(items.A.toString()).toEqual(a.toString());
    expect(items.B.toString()).toEqual(b.toString());
    expect(items.C.toString()).toEqual(c.toString());
  });
});