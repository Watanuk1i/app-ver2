module.exports = function override(config, env) {
  // Удалим старую конфигурацию ESLint
  config.module.rules = config.module.rules.filter(
    rule => !(rule.use && rule.use.some(use => use.loader && use.loader.includes('eslint-loader')))
  );
  
  return config;
} 