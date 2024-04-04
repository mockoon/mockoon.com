import { JSONPath } from 'jsonpath-plus';
import { get as objectGet } from 'object-path';

// code taken from @mockoon/commons-server package as it contains node-specific code

/**
 * Convert an object path (for the object-path lib) containing escaped dots '\.'
 * to an array of strings to allow fetching properties containing dots.
 *
 * Example:
 * 'get.a.property\.with\.dots => ['get', 'a', 'property.with.dots']
 *
 * To query an object like this:
 *
 * ```
 * {
 *   get: {
 *     a: {
 *       'propery.with.dots': "value"
 *     }
 *   }
 * }
 * ```
 * @param str
 */
export const convertPathToArray = (str: string): string | string[] => {
  if (str.includes('\\.')) {
    return str
      .replace(/\\\./g, '%#%')
      .split('.')
      .map((s) => s.replace(/%#%/g, '.'));
  }

  return str;
};

/**
 * Look for a value in an object or array using a path (dot notation or JSONPath).
 * If no path is provided, return the full data.
 * If the value is not found, return the default value.
 *
 * @param data
 * @param path
 * @param defaultValue
 * @returns
 */
export const getValueFromPath = (
  data: any,
  path: string,
  defaultValue: any
) => {
  if (
    (Array.isArray(data) || typeof data === 'object') &&
    typeof path === 'string' &&
    path !== ''
  ) {
    let foundValue: any;

    // Added wrap = false (Check https://github.com/mockoon/mockoon/issues/1297)
    if (path.startsWith('$')) {
      foundValue = JSONPath({ json: data, path: path, wrap: false });
    } else {
      foundValue = objectGet(data, convertPathToArray(path));
    }

    return foundValue !== undefined ? foundValue : defaultValue;
  }

  return data;
};
