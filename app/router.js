import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('digidoo', {path: '/'}, function() {
    this.route('hospitals', function() {
      this.route('edit');
    });
    this.route('contacts', function() {
      this.route('create');
    });
    this.route('sms', function() {
      this.route('create');
    });
  this.route('contractions');
  });
});

export default Router;


