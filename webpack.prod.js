const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/client/index.js',
	optimization: {
		minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})],
	},
	module: {
		rules: [
			{
				test: '/.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({ filename: '[name].css' }),
	],
};
