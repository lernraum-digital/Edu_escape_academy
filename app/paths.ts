// Internal links use the root of the eventual custom domain.
const basePath = '';

export function sitePath(path: string) {
  return `${basePath}${path}`;
}
