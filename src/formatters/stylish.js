import _ from 'lodash';

const getIdent = (spaces) => ('    '.repeat(spaces));

const getString = (value, spaces = 0) => {
  if (!_.isObject(value)) {
    return value;
  }
  const lines = _.keys(value).map((node) => `${getIdent(spaces)}    ${node}: ${getString(value[node], spaces + 1)}`);
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${getIdent(spaces)}}`;
};

const formatStylish = (diff, spaces = 0) => {
  const lines = diff.map((node) => {
    const buildLine = (char, value) => `${getIdent(spaces)}  ${char} ${node.name}: ${getString(value, spaces + 1)}`;
    const diffType = {
      removed: () => buildLine('-', node.value),
      unchanged: () => buildLine(' ', node.value),
      changed: () => `${getIdent(spaces)}  - ${node.name}: ${getString(node.firstValue, spaces + 1)}\n ${getIdent(spaces)} + ${node.name}: ${getString(node.secondValue, spaces + 1)}`,
      added: () => buildLine('+', node.value),
      nested: () => `${getIdent(spaces)}    ${node.name}: ${formatStylish(node.children, spaces + 1)}`,
    };
    return diffType[node.type]();
  });
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${getIdent(spaces)}}`;
};

export default formatStylish;
