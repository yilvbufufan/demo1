'use strict';
//数据格式转化为函数
var utils = require('./../utils');
var defaults = require('../defaults');

/**
 * Transform the data for a request or a response
 *暴露函数 对请求和响应数据进行转化
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};
