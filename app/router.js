import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('digidoo', {path: '/'}, function() {
    this.route('index', function() {
      this;
    });
    this.route('hospitals', function() {
      this.route('create');
    });
    this.route('sms', function() {
      this.route('create');
    });
  });
});

export default Router;
