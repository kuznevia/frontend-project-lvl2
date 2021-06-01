import _ from 'lodash';
import parse from './parsers.js';

export default (file1, file2) => {
  const firstFileParsed = parse(file1);
  const secondFileParsed = parse(file2);
  const firstFileParsedEntries = Object.entries(firstFileParsed);
  const secondFileParsedEntries = Object.entries(secondFileParsed);
  const jointEntriesPart1 = firstFileParsedEntries.reduce((acc, entry) => {
    const [key, value] = entry;
    if (_.has(secondFileParsed, key) && firstFileParsed[key] === secondFileParsed[key]) {
      acc.push([' ', key, value]);
      return acc;
    }
    if (_.has(secondFileParsed, key)) {
      acc.push(['-', key, value]);
      acc.push(['+', key, secondFileParsed[key]]);
      return acc;
    }
    acc.push(['-', key, value]);
    return acc;
  }, []);
  const jointEntriesPart2 = secondFileParsedEntries.reduce((acc, entry) => {
    const [key, value] = entry;
    if (!_.has(firstFileParsed, key)) {
      acc.push(['+', key, value]);
      return acc;
    }
    return acc;
  }, []);
  const jointEntries = [...jointEntriesPart1, ...jointEntriesPart2];
  const sortedJointEntries = _.sortBy(jointEntries, [1]);
  const EntriesStingify = sortedJointEntries.reduce((acc, entry) => {
    const [sign, key, value] = entry;
    const newString = `\n  ${sign} ${key}: ${value}`;
    return acc + newString;
  }, '');
  const result = `{${EntriesStingify}\n}`;
  console.log(result);
  return result;
};
