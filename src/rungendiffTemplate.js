console.log(firstFileParsed);
  console.log(secondFileParsed);
  console.log(firstFileParsedEntries);
  console.log(secondFileParsedEntries);
  console.log(jointEntries);
  const newEntries = jointEntries.reduce((acc, entry) => {
    const [key, value] = entry;
    console.log('fuction!');
    console.log([key, value]);
    console.log(entry);
    console.log(_.has(firstFileParsed, key));
    console.log(_.has(secondFileParsed, key));
    console.log(firstFileParsed[key]);
    console.log(secondFileParsed[key]);
    console.log(firstFileParsed[key] === secondFileParsed[key]);
    if (_.has(firstFileParsed, key) && _.has(secondFileParsed, key) && firstFileParsed[key] === secondFileParsed[key]) {
      if (!_.has(acc, '')) {
        acc[''] = [];
      }
      acc[''].push(entry);
      return acc;
    }
    if (_.has(firstFileParsed, key) && _.has(secondFileParsed, key)) {
      if (!_.has(acc, '-')) {
        acc['-'] = [];
      }
      if (!_.has(acc, '+')) {
        acc['+'] = [];
      }
    }
    return acc;
  }, {});
  console.log(newEntries);