import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import toastr from 'angular-toastr';
import ngMessages from 'angular-messages';
import './lib/ng-img-crop.js';
import jQuery from 'jquery';

window.$ = jQuery;
window.jQuery = jQuery;

import 'bootstrap';

import './index.scss';
import './styles/main.css';

import APP_MODULE from './app.module.js';

import { routerConfig } from './index.route.js';

const appNode = document.createElement('ui-view');

document.body.appendChild(appNode);

const app = angular.module('hart', [
  APP_MODULE,
  uiRouter,
  ngMaterial,
  ngMessages,
  toastr,
  'ngImgCrop',
])
  .config(routerConfig)
  .config(function (toastrConfig) {
    'ngInject';
    angular.extend(toastrConfig, {
      timeout: 100,
    });
  });

angular.bootstrap(document.documentElement, ['hart']);

