const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
})

module.exports = {
  ...module.exports,
  basePath: '/youth-commerce-demo',
  assetPrefix: '/youth-commerce-demo/',
}
