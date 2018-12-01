module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/earthlife/' : '/',
  transpileDependencies: [/\bvue-awesome\b/]
};
