import _ from 'lodash';

const calculateDiff = (data1, data2) => {
  console.log(data1);
  console.log(data2);
  console.log(_.keys(data1));
  console.log(_.keys(data2));
  const commonKeys = _.union(_.keys(data1), _.keys(data2));
  console.log(commonKeys);
  const result = commonKeys
    .map((node) => {
      if (!_.has(data1, node)) {
        return { name: node, type: 'added', value: data2[node] };
      }
      if (!_.has(data2, node)) {
        return { name: node, type: 'removed', value: data1[node] };
      }
      if (_.isObject(data1[node]) && _.isObject(data2[node])) {
        return { name: node, type: 'nested', children: calculateDiff(data1[node], data2[node]) };
      }
      if ((typeof data1[node] !== typeof data2[node])
      || (data1[node] !== data2[node])) {
        return {
          name: node,
          type: 'changed',
          valueBefore: data1[node],
          valueAfter: data2[node],
        };
      }
      return { name: node, type: 'unchanged', value: data1[node] };
    });
  console.log('ПУК');
  console.log(result);
  console.log('ЖУК');
  console.log(result[0].children);
  return result;
};

export default calculateDiff;
