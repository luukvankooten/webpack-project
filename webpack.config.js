const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './resources/js/app.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/assets'),
	},

	devServer: {
    	publicPath: 'assets',
    	contentBase: path.join(__dirname, 'public')
  	},

	mode: 'development',

	module: {
		rules: [
		{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
         	test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        	use: [
         	{
           		loader: 'file-loader',
           		options: {
             		name: '[name].[ext]',
             		//outputPath: 'fonts/',    // where the fonts will go
             		publicPath: 'assets/'       // override the default path
           		}
         	}
         	]
         }
		]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},

	plugins: [
		new VueLoaderPlugin(),
	]
};