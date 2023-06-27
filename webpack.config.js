//01ss
module.exports = {
	entry: './fileSrc/app/app.ts', //xx1
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		//
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		inline: false,
	},
};
