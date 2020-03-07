function prettier(...names) {
  return () => names.map(name => import(`prettier/parser-${name}.js`));
}

export const parsers = {
  javascript: {
    name: 'babel',
    import: prettier('babylon'),
  },
  typescript: {
    name: 'typescript',
    import: prettier('typescript'),
  },
  css: {
    name: 'css',
    import: prettier('postcss'),
  },
  scss: {
    name: 'scss',
    import: prettier('postcss'),
  },
  less: {
    name: 'less',
    import: prettier('postcss'),
  },
  json: {
    name: 'json',
    import: prettier('babylon'),
  },
  json5: {
    name: 'json5',
    import: prettier('babylon'),
  },
  graphql: {
    name: 'graphql',
    import: prettier('graphql'),
  },
  markdown: {
    name: 'markdown',
    import: prettier('markdown'),
  },
  html: {
    name: 'html',
    import: prettier('html', 'babylon', 'postcss'),
  },
  vue: {
    name: 'vue',
    import: prettier('html', 'babylon', 'postcss'),
  },
  yaml: {
    name: 'yaml',
    import: prettier('yaml'),
  },
};
