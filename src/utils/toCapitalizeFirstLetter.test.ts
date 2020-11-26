import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать любую строку, возвращать строку где первый символ заглавный, остальные строчные', () => {
    const myStr = toCapitalizeFirstLetter('приНиматЬ Строку');

    expect(myStr).toEqual('Принимать строку');
  });

  test('Должна принимать пустую строку, возвращать пустую строку', () => {
    const myStr = toCapitalizeFirstLetter('');

    expect(myStr).toEqual('');
  });
});