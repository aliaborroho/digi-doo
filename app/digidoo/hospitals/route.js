import Ember from 'ember';

export default Ember.Route.extend({
  madel: function() {
    return this.findAll('hospitals');
  }
});
