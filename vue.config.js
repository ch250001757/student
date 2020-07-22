const path = require('path')
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        vue: 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        public: path.resolve(__dirname, './public'),
        '@c': path.resolve(__dirname, './src/components'),
        '@a': path.resolve(__dirname, './src/api'),
        '@v': path.resolve(__dirname, './src/views'),
        data: path.resolve(__dirname, './src/data'),
        '@s': path.resolve(__dirname, './src/styles')
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
}
