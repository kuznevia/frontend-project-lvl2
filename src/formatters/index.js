import stylish from './stylish.js';
import plain from './plain.js';

const formats = {
  stylish,
  plain,
};

export default (diff, format) => {
  const formatType = formats[format];
  return formatType(diff);
};
