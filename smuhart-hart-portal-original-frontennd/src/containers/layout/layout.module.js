import angular from 'angular';
import LayoutComponent from './layout.component.js';

export default angular
  .module('layout', [])
  .component('layout', LayoutComponent)
  .name;

