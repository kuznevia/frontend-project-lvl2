import * as path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const firstAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/correct_1.txt');
const firstAnswer = readFileSync(firstAnswerPath, 'utf8');
const secondAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/correct_2.txt');
const secondAnswer = readFileSync(secondAnswerPath, 'utf8');

test('genDiff JSON plain', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(firstAnswer);
});

test('genDiff YML plain', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(firstAnswer);
});

test('genDiff JSON/YML plain', () => {
  expect(genDiff('file1.json', 'file2.yml')).toEqual(firstAnswer);
  expect(genDiff('file1.yml', 'file2.json')).toEqual(firstAnswer);
});

test('genDiff JSON nested', () => {
  expect(genDiff('file3.json', 'file4.json')).toEqual(secondAnswer);
});
