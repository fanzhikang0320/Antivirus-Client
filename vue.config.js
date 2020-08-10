const path = require('path')
module.exports = {
	publicPath: process.env.NODE_ENV == 'production'? '/public/client' : '/',
    productionSourceMap: false,
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
	},
	devServer: {
		disableHostCheck: true,
		proxy: {
			'/api': {
				changeOrigin: true,
				ws: true,
				target: 'http://192.168.50.203:12138',
				pathRewrite: {
					'^/api': '/'
				}
			}
			
		}
	}
}
function addStyleResource(rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
			// 需要全局导入的less路径
			// path.resolve(__dirname, './src/assets/css/Init.less'),
			path.resolve(__dirname, './src/assets/css/Public.less')
		],
	})
}