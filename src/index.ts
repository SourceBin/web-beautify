import { parsers } from './parsers';

async function format(source: string, options?: any): Promise<string> {
  const prettier = await import('prettier/standalone.js');
  return prettier.format(source, options);
}

export async function beautify(source: string, language: string): Promise<string> {
  const parser = parsers[language];

  return format(source, {
    parser: parser.name,
    plugins: [await parser.import()],
  });
}
