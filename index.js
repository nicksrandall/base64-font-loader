/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Nick Randall
*/
var loaderUtils = require('loader-utils');

var dictionary = {
	'woff': 'application/font-woff',
	'woff2': 'application/font-woff2',
	'eot': 'application/vnd.ms-fontobject',
	'ttf': 'application/x-font-ttf',
	'otf': 'font/opentype',
	'svg': 'image/svg+xml'
};

module.exports = function(content) {
	var options = loaderUtils.getOptions(this) || {}
	this.cacheable && this.cacheable();
	var query = this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : {}
	var ext = loaderUtils.interpolateName(this, "[ext]", {
		context: query.context || options.context || undefined,
		content: content,
		regExp: query.regExp
	}).toLowerCase();
	if (!dictionary.hasOwnProperty(ext)) {
		throw new Error(ext + ' font type is not supported');
	}
	var url = 'data:' + dictionary[ext] + ';charset=utf-8;base64,';
	url += content.toString('base64');
	return 'module.exports = ' + JSON.stringify(url);
}

module.exports.raw = true;
