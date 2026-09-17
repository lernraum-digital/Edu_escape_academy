// The final site uses the root of the custom domain.
const basePath = '';

export function sitePath(path: string) {
  return `${basePath}${path}`;
}
