import yaml from 'js-yaml';
import * as path from 'path';
import { readFileSync } from 'fs';

const parsersTree = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
};

export default (file) => {
  const filePath = path.resolve(process.cwd(file), file);
  const fileExt = path.extname(filePath);
  const fileContent = readFileSync(filePath, 'utf8');
  const parse = parsersTree[fileExt];
  return parse(fileContent);
};
