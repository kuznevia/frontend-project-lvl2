import path from 'path';
import calculateDiff from './calculateDiff.js';
import readFile from './utils.js';
import parse from './parsers.js';
import visualize from './formatters/index.js';

const getParesedFile = (file) => {
  const data = readFile(file);
  const dataType = path.extname(file).substring(1);
  return parse(data, dataType);
};

export default (file1, file2, format = 'stylish') => {
  const diff = calculateDiff(getParesedFile(file1), getParesedFile(file2));
  return visualize(diff, format);
};
