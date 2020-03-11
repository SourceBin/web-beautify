/* eslint-disable no-underscore-dangle */
/* globals prettierPlugins */

import { unpkgPrettier } from './unpkg.js';

function prettier(name) {
  return unpkgPrettier(`parser-${name}.js`);
}

// https://github.com/prettier/prettier/blob/a093bb3f7b9f59d8cbaf7e20f97f6fafceaef21b/website/static/worker.js#L13-L146
export const parsers = {
  // JS - Babel
  get babel() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.babel;
  },

  get 'babel-flow'() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers['babel-flow'];
  },

  // backward compatibility
  get babylon() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.babylon;
  },

  get json() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.json;
  },

  get json5() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.json5;
  },

  get 'json-stringify'() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers['json-stringify'];
  },

  get __js_expression() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.__js_expression;
  },

  get __vue_expression() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.__vue_expression;
  },

  get __vue_event_binding() {
    prettier('babylon');
    return prettierPlugins.babylon.parsers.__vue_event_binding;
  },

  // JS - Flow
  get flow() {
    prettier('flow');
    return prettierPlugins.flow.parsers.flow;
  },

  // JS - TypeScript
  get typescript() {
    prettier('typescript');
    return prettierPlugins.typescript.parsers.typescript;
  },

  // JS - Angular Action
  get __ng_action() {
    prettier('angular');
    return prettierPlugins.angular.parsers.__ng_action;
  },

  // JS - Angular Binding
  get __ng_binding() {
    prettier('angular');
    return prettierPlugins.angular.parsers.__ng_binding;
  },

  // JS - Angular Interpolation
  get __ng_interpolation() {
    prettier('angular');
    return prettierPlugins.angular.parsers.__ng_interpolation;
  },

  // JS - Angular Directive
  get __ng_directive() {
    prettier('angular');
    return prettierPlugins.angular.parsers.__ng_directive;
  },

  // CSS
  get css() {
    prettier('postcss');
    return prettierPlugins.postcss.parsers.css;
  },

  get less() {
    prettier('postcss');
    return prettierPlugins.postcss.parsers.css;
  },

  get scss() {
    prettier('postcss');
    return prettierPlugins.postcss.parsers.css;
  },

  // GraphQL
  get graphql() {
    prettier('graphql');
    return prettierPlugins.graphql.parsers.graphql;
  },

  // Markdown
  get markdown() {
    prettier('markdown');
    return prettierPlugins.markdown.parsers.remark;
  },

  get mdx() {
    prettier('markdown');
    return prettierPlugins.markdown.parsers.mdx;
  },

  // YAML
  get yaml() {
    prettier('yaml');
    return prettierPlugins.yaml.parsers.yaml;
  },

  // Handlebars
  get glimmer() {
    prettier('glimmer');
    return prettierPlugins.glimmer.parsers.glimmer;
  },

  // HTML
  get html() {
    prettier('html');
    return prettierPlugins.html.parsers.html;
  },

  // Vue
  get vue() {
    prettier('html');
    return prettierPlugins.html.parsers.vue;
  },

  // Angular
  get angular() {
    prettier('html');
    return prettierPlugins.html.parsers.angular;
  },

  // Lightning Web Components
  get lwc() {
    prettier('html');
    return prettierPlugins.html.parsers.lwc;
  },
};
