import * as prettier from 'prettier/standalone';

import { parsers } from './parsers.js';

export async function beautify(source, language) {
  const parser = parsers[language];
  const plugins = await Promise.all(parser.import());

  return prettier.format(source, {
    plugins,
    parser: parser.name,
    singleQuote: true,
  });
}
