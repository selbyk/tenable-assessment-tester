import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', function() {
    this.route('new');
    this.route('login');
  });
  this.route('configs', function() {});
  this.route('docs');
  this.route('jsdocs');
});

export default Router;
