import Ember from 'ember';
export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('message');
  },
  actions: {
    sendMessage: function(message) {
      message.send().then(() => {
        alert('Your message has been sent');
      });
    }
  }
});

