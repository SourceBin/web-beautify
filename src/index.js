/* globals prettier */

import { unpkgPrettier } from './unpkg.js';
import { parsers } from './parsers.js';

unpkgPrettier('standalone.js');

export function beautify(source, language) {
  return prettier.format(source, {
    parser: language,
    plugins: [{ parsers }],
    singleQuote: true,
  });
}
