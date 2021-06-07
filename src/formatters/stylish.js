import errors from 'errno';
import _ from 'lodash';

const ident = (spaces) => ('    '.repeat(spaces));

const stringify = (value, spaces = 0) => {
  if (!_.isObject(value)) {
    return value;
  }
  const lines = _.keys(value).map((node) => `${ident(spaces)}    ${node}: ${stringify(value[node], spaces + 1)}`);
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${ident(spaces)}}`;
};

const stylish = (diff, spaces = 0) => {
  const lines = diff.map((node) => {
    const buildLine = (char, value) => `${ident(spaces)}  ${char} ${node.name}: ${stringify(value, spaces + 1)}`;
    switch (node.type) {
      case 'removed':
        return buildLine('-', node.value);
      case 'unchanged':
        return buildLine(' ', node.value);
      case 'changed':
        return `${ident(spaces)}  - ${node.name}: ${stringify(node.valueBefore, spaces + 1)}\n ${ident(spaces)} + ${node.name}: ${stringify(node.valueAfter, spaces + 1)}`;
      case 'added':
        return buildLine('+', node.value);
      case 'nested':
        return `${ident(spaces)}    ${node.name}: ${stylish(node.children, spaces + 1)}`;
      default:
        throw new Error(errors.code.ESRCH);
    }
  });
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${ident(spaces)}}`;
};

export default stylish;
