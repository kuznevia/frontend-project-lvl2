import yaml from 'js-yaml';

const parsersTree = {
  json: JSON.parse,
  yml: yaml.safeLoad,
};

export default (data, dataType) => {
  const parse = parsersTree[dataType];
  return parse(data);
};
