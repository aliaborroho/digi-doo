import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.createRecord('hospital');
  },

  actions: {
    submit: function(form) {
      debugger;
      form.save().then(() => {
        this.transitionTo('/');
      });
    }
  }
});
