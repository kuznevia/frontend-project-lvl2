import * as path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const firstAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/plain.txt');
const firstAnswer = readFileSync(firstAnswerPath, 'utf8');
const secondAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/nested.txt');
const secondAnswer = readFileSync(secondAnswerPath, 'utf8');
const thirdAnswerPath = path.resolve(process.cwd(), './__tests__/__fixtures__/json.txt');
const thirdAnswer = readFileSync(thirdAnswerPath, 'utf8');

test('genDiff JSON plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(firstAnswer);
});

test('genDiff YML plain', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(firstAnswer);
});

test('genDiff JSON nested', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(secondAnswer);
});

test('genDiff YML nested', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(secondAnswer);
});

test('genDiff JSON json', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(thirdAnswer);
});

test('genDiff YML json', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(thirdAnswer);
});
