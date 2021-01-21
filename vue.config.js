const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
	publicPath: process.env.NODE_ENV == 'production'? '/public/client' : '/',
	productionSourceMap: false,
	lintOnSave: false,
	css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({remUnit: 100}),
                ]
            }
        }
    },
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));

		// config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
	}
}
function addStyleResource(rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
			path.resolve(__dirname, './src/assets/css/variable.less')
		],
	})
}