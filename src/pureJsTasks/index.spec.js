import * as pureJs from '.';

describe('isReplacementString (task 8)', () => {
  const testVariable = 'dog';

  test('case when length is different', () => {
    expect(pureJs.isReplacementString('dogie', testVariable)).toBe(false);
  });

  test('case with empty strings', () => {
    expect(pureJs.isReplacementString('', '')).toBe(true);
  });

  test('truth case', () => {
    expect(pureJs.isReplacementString(testVariable, 'god')).toBe(true);
  });

  test('false case', () => {
    expect(pureJs.isReplacementString(testVariable, 'ggd')).toBe(false);
  });

  test('long string', () => {
    expect(pureJs.isReplacementString('bad day', 'dab yad')).toBe(true);
  });
});

describe('getAllReplacement (task 10)', () => {
  const testData = 123;
  const testResult = [123, 132, 213, 231, 312, 321];

  const oneDigitTest = 1;

  test('truth case', () => {
    expect(pureJs.getAllReplacement(testData)).toEqual(testResult);
  });

  test('max length equal to 3', () => {
    expect(pureJs.getAllReplacement(1234)).toBeNull();
  });

  test(`case for number ${oneDigitTest}`, () => {
    expect(pureJs.getAllReplacement(oneDigitTest)).toEqual([oneDigitTest]);
  });
});

describe('isPalindrom (task 11)', () => {
  const data = {
    'А роза упала на лапу Азора': true,
    'аРозАУпала нА лаПуАзоРа': true,
    'А розw упtла на qапу Азорs': false,
  };

  for (let item in data) {
    const result = data[item];
    test(`${result} case`, () => {
      expect(pureJs.isPalindrom(item)).toBe(result);
    });
  }
});
