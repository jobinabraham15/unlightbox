module.exports = function(api) {
  const presets = ["@babel/react", "@babel/env"];
  api.cache(false);
  return {
    presets
  };
};
