// this config file is created by the webpack build process, then required here.
// we need to do this because the web browser can't read files using 'fs',
// resulting in the 'config' package not working,
// and so we need to precalculate the values and import the values here.
import configValues from '../../_build/config';

// from http://stackoverflow.com/a/6491621
const getByPropPath = (path, obj) => {
  const currentPath = path
                        .replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
                        .replace(/^\./, '');          // strip a leading dot
  let currentObj = obj;
  const pathParts = currentPath.split('.');

  for (let i = 0, n = pathParts.length; i < n; i += 1) {
    const key = pathParts[i];

    if (!(key in currentObj)) {
      throw new Error(`Invalid config key ${path}`);
    }

    currentObj = currentObj[key];
  }

  return currentObj;
};

export default {
  get(key) {
    return getByPropPath(key, configValues);
  },
};
