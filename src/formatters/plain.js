import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getNodeName = (node, ancestor) => {
  if (ancestor === '') {
    return `${node.name}`;
  }
  return `${ancestor}.${node.name}`;
};

const formatPlain = (diff, ancestor = '') => {
  console.log(diff);
  console.log('HELLO WORLD!!!!!!!!!!!');
  const lines = diff
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      console.log(node);
      console.log(node.type);
      const diffType = {
        removed: () => `Property '${getNodeName(node, ancestor)}' was removed`,
        changed: () => `Property '${getNodeName(node, ancestor)}' was updated. From ${getValue(node.firstValue)} to ${getValue(node.secondValue)}`,
        added: () => `Property '${getNodeName(node, ancestor)}' was added with value: ${getValue(node.value)}`,
        nested: () => formatPlain(node.children, getNodeName(node, ancestor)),
      };
      return diffType[node.type]();
    });
  const innerValue = lines.join('\n');
  return innerValue;
};

export default formatPlain;
