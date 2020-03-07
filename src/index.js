import * as prettier from 'prettier/standalone';

import { parsers } from './parsers.js';

export async function beautify(source, language) {
  const parser = parsers[language];

  return prettier.format(source, {
    parser: parser.name,
    plugins: await Promise.all(parser.import()),
    singleQuote: true,
  });
}
