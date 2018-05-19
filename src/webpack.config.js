var path = require('path');
var webpack = require('webpack');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractLess = new ExtractTextPlugin('[name].[contenthash].css');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		usermanagement: './sites/UserManagement/app'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'stage-2', 'react']
				}
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less']
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	mode: 'development'
};
