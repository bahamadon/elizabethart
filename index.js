var Metalsmith = require('metalsmith');
var stylus = require('metalsmith-stylus');
var serve = require('metalsmith-serve');
var kouto = require('kouto-swiss');
var husl = require('husl-stylus');
var poststylus = require('poststylus');
var lost = require('lost');
var rupture = require('rupture');
var webpack = require('metalsmith-webpack');
var path = require('path');

var watch = require('metalsmith-watch');

var logFilesMap = function(files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
        var fileObject = files[file];

        console.log("key -------> ", file);
        console.log("value -----> ", fileObject);
    });
};



Metalsmith(__dirname)
    .source("src/")
    .destination('./build')
    .use(stylus({outputStyle: "expanded",
	    	 use: [kouto(),
	    	       husl(),
               rupture(),
               poststylus([lost({"gutter": "30px", "flexbox": "no-flex", "cycle": "auto"})])],
	    	 src: __dirname + '/styles',
		     dest: __dirname + '/css/'}))
//         .use(webpack({
//         		progress: true,
//         		context: path.resolve(__dirname, './src/scripts/'),
//         		    entry: './init.js',
//         		    output: {
//         		      path: path.resolve(__dirname, './build/scripts/'),
//         		      filename: 'bundle.js',
//         			  publicPath: '/scripts/'
//         	    	}
//         	}))
//    .use(serve({}))
//    .use(watch({livereload: true}))
    .build(function(err) {
        if (err) console.log(err);
    });
