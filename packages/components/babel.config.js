/*
 * QUICK FIX !
 * I couldn't find out how to make Babel looking for the root configuration.
 *
 * See the issue in Storybook
 * https://github.com/storybookjs/storybook/issues/6633#issuecomment-575873869
 *
 * Babel documentation for monorepo
 * https://babeljs.io/docs/en/config-files#monorepos
 *
 * The solution in a monorepo is to set the "root-mode" to "upward".
 * This will make Babel looking for the configuration outside the execution direction
 *
 * Problem
 * Where to specify that option with Storybook ?
 * I tried in the webpack config in .storybook/.main but this directory is about the SB app, not the components rendered !
 *
 * */

const babelRootConfig = require("../../babel.config");
console.log("Loading custom Babel config from root monorepo", module.id);
module.exports = babelRootConfig;
