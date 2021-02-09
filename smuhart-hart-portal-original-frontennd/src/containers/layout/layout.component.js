import './welcome.less';
import template from './navigation.html';
import './img/sample.svg';

class controller {
  constructor() {
    this.items = [
      { title: 'Webpack', image: require('./img/what-is-webpack.png') },
      { title: 'Babel', image: require('./img/babel-logo.png') },
      { title: 'Node Sass', image: require('./img/libsass-logo.png') },
    ];
  }
}

const component = {
  controller,
  controllerAs: 'layout',
  template,
};

export default component;
