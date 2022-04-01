'use strict';
//axios.js入口文件
var utils = require('./utils');
//引入绑定函数 创建函数
var bind = require('./helpers/bind');
//引入axios主文件
var Axios = require('./core/Axios');
//引入配置函数
var mergeConfig = require('./core/mergeConfig');
//导入默认设置
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *创建一个axios的实例对象
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  ///创建一个实例对象 context 可以调用get post put delete request
  var context = new Axios(defaultConfig);//context 不能当函数使用
  //将一个requst 方法的this 指向context并且返回新函数 instance可以当做函数使用 且返回一个promise
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = require('./cancel/CanceledError');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;

// Expose AxiosError class
axios.AxiosError = require('../lib/core/AxiosError');

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

//全局暴露axios
window.axios = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;
