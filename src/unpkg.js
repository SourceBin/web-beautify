export function unpkg(pkg, version, file) {
  return importScripts(`https://unpkg.com/${pkg}@${version}/${file}`);
}

export function unpkgPrettier(file) {
  return unpkg('prettier', '1.19.1', file);
}
