import sum from '../../src/smoke';

test('sum must sum correctly arguments', () => {
    expect(sum(1,2)).toBe(3)
})