const path = require('path')
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
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
	}
}
function addStyleResource(rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
			path.resolve(__dirname, './src/assets/css/Public.less')
		],
	})
}