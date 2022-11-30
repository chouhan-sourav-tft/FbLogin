const common = `
  --require step-definitions/base.js
  --require step-definitions/**/*.steps.js
  `;
module.exports = {
  default: `${common} features/**/*.feature`,
};
module.exports = { default: `${common} features/**/*.feature --publish-quiet` }