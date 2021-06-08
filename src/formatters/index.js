import stylish from './stylish.js';
import plain from './plain.js';

const formats = {
  stylish,
  plain,
};

export default (diff, format) => {
  const getFormatType = formats[format];
  return getFormatType(diff);
};
