const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-react", "@babel/preset-env"
						]
					}
				}
			},
			{
				test: /.scss$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						}
					}
				]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin(
			{
				template: "./public/index.html",
			}
		)
	]
};