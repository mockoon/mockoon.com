/**
 * Transform internal relative links
 *
 * @param docsVersion
 */
export const urlTransform = (docsVersion?: string) => (uri: string) => {
  if (uri.includes('docs:') || uri.includes('tutorials:')) {
    const schemeSplit = uri.split(':');
    const pathSplit = schemeSplit[1].split('#');
    let docsSuffix = '';

    if (schemeSplit[0] === 'docs') {
      if (docsVersion) {
        docsSuffix = `/${docsVersion}`;
      } else {
        docsSuffix = '/latest';
      }
    }

    return `/${schemeSplit[0]}${docsSuffix}/${pathSplit[0]}/${
      pathSplit[1] ? '#' + pathSplit[1] : ''
    }`.replace(/\/{2,}/g, '/');
  }

  return uri;
};
