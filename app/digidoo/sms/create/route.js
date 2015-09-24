import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      message: this.store.createRecord('sms'),
      contacts: this.store.findAll('contact')
    });
  },

  actions: {
    submit: function(message) {
      message.save().then(() => {
        this.transitionTo('digidoo.sms');
      });
    }
  }
});

