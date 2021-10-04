import path from 'path';
import calculateDiff from './calculateDiff.js';
import { readFile } from './utils.js';
import parse from './parsers.js';
import visualize from './formatters/index.js';

export default (file1, file2, format = 'stylish') => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const dataType1 = path.extname(file1).substring(1);
  const dataType2 = path.extname(file2).substring(1);
  const firstFileParsed = parse(data1, dataType1);
  const secondFileParsed = parse(data2, dataType2);
  const diff = calculateDiff(firstFileParsed, secondFileParsed);
  return visualize(diff, format);
};
