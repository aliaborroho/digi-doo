import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
     return this.store.createRecord('sms');
   },

   actions: {
    submit: function(sms) {
      sms.save().then(() => {
        this.transitionTo('digidoo.sms.index');
      });
    }
   }
});

