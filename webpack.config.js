var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'demo');
var APP_DIR = path.resolve(__dirname, '.');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
	entry: [
		'babel-polyfill',
		APP_DIR + '/menthol.css',
		BUILD_DIR + '/demo.jsx'
	],
	target: 'web',
	output: {
		path: BUILD_DIR,
		filename: 'site.js',

	},
	devtool: '#eval-source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					compact: false,
					presets: [["es2015",'react'], ['env', {}]],
					plugins: [
						"@babel/plugin-proposal-object-rest-spread",
						"@babel/register",
						"@babel/cli @babel/preset-env",
						"@babel/preset-react",
						"@babel/plugin-transform-react-jsx-compat",
						"@babel/plugin-proposal-function-bind",
						"@babel/plugin-proposal-class-properties"
					]

				}
			}, {
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"],
			}, {
				test: /\.(jpe?g|png|gif)$/i,
				loader: "file-loader",
				query: {
					name: '[name].[ext]',
					outputPath: 'images/'
				}
			},],
	},
	// optimization: {
	// 	minimizer: [
	// 		// we specify a custom UglifyJsPlugin here to get source maps in production
	// 		new UglifyJsPlugin({
	// 			cache: true,
	// 			parallel: true,
	// 			uglifyOptions: {
	// 				compress: false,
	// 				ecma: 6,
	// 				mangle: true
	// 			},
	// 			sourceMap: true
	// 		})
	// 	]
	// },
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			warnings: true,
			uglifyOptions: {},
		})
	],
};

module.exports = config;