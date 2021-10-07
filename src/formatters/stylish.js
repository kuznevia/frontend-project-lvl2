import _ from 'lodash';

const getIdent = (spaces) => (' '.repeat(spaces));

const getString = (value, spaces = 0) => {
  if (!_.isObject(value)) {
    return value;
  }
  const lines = _.keys(value).map((node) => `${getIdent(spaces + 5)}  ${node}: ${getString(value[node], spaces + 4)}`);
  const innerValue = lines.join('\n');
  return `{\n${innerValue}\n${getIdent(spaces + 1)}  }`;
};

const formatStylish = (diff) => {
  const iter = (newDiff, spaces = 0) => {
    const lines = newDiff.map((node) => {
      const buildLine = (char, value) => `${getIdent(spaces)}  ${char} ${node.name}: ${getString(value, spaces + 1)}`;
      const diffType = {
        removed: () => buildLine('-', node.value),
        unchanged: () => buildLine(' ', node.value),
        changed: () => `${getIdent(spaces + 2)}- ${node.name}: ${getString(node.firstValue, spaces + 1)}\n ${getIdent(spaces + 1)}+ ${node.name}: ${getString(node.secondValue, spaces + 1)}`,
        added: () => buildLine('+', node.value),
        nested: () => `${getIdent(spaces + 2)}  ${node.name}: ${iter(node.children, spaces + 4)}`,
      };
      return diffType[node.type]();
    });
    const innerValue = lines.join('\n');
    return `{\n${innerValue}\n${getIdent(spaces)}}`;
  };
  return iter(diff);
};

export default formatStylish;
