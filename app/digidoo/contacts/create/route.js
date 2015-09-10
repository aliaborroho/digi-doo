import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
   //return Ember.$.ajax('http://labortracker.azurewebsites.net/api/hospitals');
   // Is this going to adapter.js?  Where in adapter.js?
   return this.store.createRecord('contact');
 },


 actions: {
   submit: function(contact) {
     contact.save().then(() => {
       this.transitionTo('/');
     });
   }
 }
});

