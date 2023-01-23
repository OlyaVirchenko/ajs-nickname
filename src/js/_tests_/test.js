import Validator from '../nickname';

test.each([
  ['abc123abc', true],
  ['abc1234abc', false],
  ['1abc2', false],
  ['abc123', false],
  ['ab-b_ac', true],
])(
  'Проверка метода validateUsername со значением (%s)',
  (name, expected) => {
    expect(Validator.validateUsername(name)).toBe(expected);
  },
);
