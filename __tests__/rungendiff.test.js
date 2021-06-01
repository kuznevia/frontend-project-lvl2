import genDiff from '../src/index.js';

test('genDiff JSON', () => {
  const answer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
  expect(genDiff('file1.json', 'file2.json')).toEqual(answer);
});

test('genDiff YML', () => {
  const answer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(answer);
});

test('genDiff JSON/YML', () => {
  const answer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
  expect(genDiff('file1.json', 'file2.yml')).toEqual(answer);
  expect(genDiff('file1.yml', 'file2.json')).toEqual(answer);
});
