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
	configureWebpack: (config) => {
		// 公共代码抽离
		config.optimization = {
			// 分割代码块
			splitChunks: {
				chunks: 'all',
				automaticNameDelimiter: '.',
				maxAsyncRequests: 7,
				maxSize: 200000,
				cacheGroups: {
				  vuetify: {
					test: /node_modules[\\/]vuetify/,
					chunks: 'all',
					priority: 20,
					name: true
				  },
				  viewdesign: {
					test: /node_modules[\\/]view-design/,
					chunks: 'all',
					priority: 20,
					name: true
				  },
				  vuelazyload: {
					test: /node_modules[\\/]vue-lazyload/,
					chunks: 'all',
					priority: 20,
					name: true
				  },
				  axios: {
					test: /node_modules[\\/]axios/,
					chunks: 'all',
					priority: 20,
					name: true
				  },
				  jquery: {
					test: /node_modules[\\/]jquery/,
					chunks: 'all',
					priority: 20,
					name: true
				  }
		
				}
			  }
		}
	},
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));

		// config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);

		
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