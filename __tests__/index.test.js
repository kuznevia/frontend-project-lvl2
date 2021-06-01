import * as path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const answerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/correct.txt');
const answer = readFileSync(answerPath, 'utf8');

test('genDiff JSON', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(answer);
});

test('genDiff YML', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(answer);
});

test('genDiff JSON/YML', () => {
  expect(genDiff('file1.json', 'file2.yml')).toEqual(answer);
  expect(genDiff('file1.yml', 'file2.json')).toEqual(answer);
});
