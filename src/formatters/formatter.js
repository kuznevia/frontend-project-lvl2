import stylish from './stylish.js';

const formats = {
  stylish,
};

export default (diff, format) => {
  const formatType = formats[format];
  return formatType(diff);
};
