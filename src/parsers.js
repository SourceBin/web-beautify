function parser(name) {
  return () => importScripts(`prettier/parser-${name}.js`);
}

export const parsers = {
  javascript: {
    name: 'babel',
    import: parser('babylon'),
  },
  typescript: {
    name: 'typescript',
    import: parser('typescript'),
  },
  css: {
    name: 'css',
    import: parser('postcss'),
  },
  scss: {
    name: 'scss',
    import: parser('postcss'),
  },
  less: {
    name: 'less',
    import: parser('postcss'),
  },
  json: {
    name: 'json',
    import: parser('babylon'),
  },
  json5: {
    name: 'json5',
    import: parser('babylon'),
  },
  graphql: {
    name: 'graphql',
    import: parser('graphql'),
  },
  markdown: {
    name: 'markdown',
    import: parser('markdown'),
  },
  html: {
    name: 'html',
    import: parser('html'),
  },
  vue: {
    name: 'vue',
    import: parser('html'),
  },
  yaml: {
    name: 'yaml',
    import: parser('yaml'),
  },
};
