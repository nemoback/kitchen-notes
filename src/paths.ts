/** Prefix local paths for project hosting while leaving external URLs unchanged. */
export function assetPath(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function stripBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && (path === base || path.startsWith(`${base}/`))) return path.slice(base.length) || '/';
  return path;
}
