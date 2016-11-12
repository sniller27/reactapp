var path = require('path')
var webpack = require('webpack')

module.exports = {

	entry: "./entry.js",
	target: 'node',
	output: {
		path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}

}
console.log('det her er config');
