/**
 * Transform internal relative links
 *
 * @param docsVersion
 */
export const transformLinkUri = (docsVersion?: string) => (uri: string) => {
  if (uri.includes('docs:') || uri.includes('tutorials:')) {
    const splitted = uri.split(':');
    let docsSuffix = '';

    if (splitted[0] === 'docs') {
      if (docsVersion) {
        docsSuffix = `/${docsVersion}`;
      } else {
        docsSuffix = '/latest';
      }
    }

    return `/${splitted[0]}${docsSuffix}/${splitted[1]}/`;
  } else if (uri.includes('mock-samples:')) {
    uri = `https://github.com/mockoon/mock-samples/blob/main/samples/${
      uri.split(':')[1]
    }.json`;
  }

  return uri;
};

/**
 * Set target for outgoing links
 *
 * @param uri
 */
export const linkTarget = (uri: string) => {
  if (uri.startsWith('http') || uri.startsWith('mock-samples')) {
    return '_blank';
  }
};
