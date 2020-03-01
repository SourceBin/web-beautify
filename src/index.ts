export async function beautify(source: string): Promise<string> {
  const prettier = await import('prettier/standalone.js');
  const parserTypescript = await import('prettier/parser-typescript.js');

  return prettier.format(source, {
    parser: 'typescript',
    plugins: [parserTypescript],
  });
}
