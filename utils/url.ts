/**
 * Transform internal relative links
 *
 * @param docsVersion
 */
export const urlTransform = (docsVersion?: string) => (uri: string) => {
  if (uri.startsWith('docs:')) {
    const schemeSplit = uri.split(':');
    const pathSplit = schemeSplit[1].split('#');
    let docsSuffix = '';

    if (docsVersion) {
      docsSuffix = `/${docsVersion}`;
    } else {
      docsSuffix = '/latest';
    }

    return `/docs${docsSuffix}/${pathSplit[0]}/${
      pathSplit[1] ? '#' + pathSplit[1] : ''
    }`.replace(/\/{2,}/g, '/');
  } else if (uri.startsWith('cloud-docs:')) {
    const schemeSplit = uri.split(':');
    const pathSplit = schemeSplit[1].split('#');

    return `/cloud/docs/${pathSplit[0]}/${
      pathSplit[1] ? '#' + pathSplit[1] : ''
    }`.replace(/\/{2,}/g, '/');
  }

  return uri;
};
