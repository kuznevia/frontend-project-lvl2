import { readFileSync } from 'fs';
import * as path from 'path';
import _ from 'lodash';


export default (file1, file2) => {
  const file1Path = path.resolve(process.cwd(file1), file1);
  const file2Path = path.resolve(process.cwd(file2), file2);
  const firstFile = readFileSync(file1Path, 'utf8');
  const firstFileParsed = JSON.parse(firstFile);
  const secondFile = readFileSync(file2Path, 'utf8');
  const secondFileParsed = JSON.parse(secondFile);
  const firstFileParsedEntries = Object.entries(firstFileParsed);
  const secondFileParsedEntries = Object.entries(secondFileParsed);
  const jointEntries = [...firstFileParsedEntries, ...secondFileParsedEntries];
  console.log(firstFileParsedEntries);
  console.log(secondFileParsedEntries);
  const newEntries = firstFileParsedEntries.reduce((acc, entry) => {
    const [key, value] = entry;
    console.log('fuction!');
    console.log([key, value]);
    console.log(entry);
    console.log(_.has(firstFileParsed, key));
    console.log(_.has(secondFileParsed, key));
    console.log(firstFileParsed[key]);
    console.log(secondFileParsed[key]);
    console.log(firstFileParsed[key] === secondFileParsed[key]);
    if (_.has(secondFileParsed, key) && firstFileParsed[key] === secondFileParsed[key]) {
      acc.push(['', key, value]);
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
  console.log(newEntries)
  
  const additionalEntries = secondFileParsedEntries.reduce((acc, entry) => {
    const [key, value] = entry;
    console.log('newfunction!');
    console.log([key, value]);
    console.log(entry);
    console.log(firstFileParsed[key]);
    console.log(secondFileParsed[key]);
    if (!_.has(firstFileParsed, key)) {
      acc.push(['+', key, value]);
      return acc;
    }
    return acc;
  }, newEntries)
  console.log(additionalEntries);
}
