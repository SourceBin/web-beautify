import * as prettier from 'prettier/standalone';

import { parsers } from './parsers.js';

function format(source, options) {
  return prettier.format(source, options);
}

export async function beautify(source, language) {
  const parser = parsers[language];

  return format(source, {
    parser: parser.name,
    plugins: [await parser.import()],
  });
}
