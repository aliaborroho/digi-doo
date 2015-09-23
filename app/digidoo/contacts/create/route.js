import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
   return this.store.createRecord('contact');
 },
   //return Ember.$.ajax('http://labortracker.azurewebsites.net/api/hospitals');
   // Is this going to adapter.js?  Where in adapter.js?


 actions: {
   submit: function(contact) {
     contact.save().then(() => {
       this.transitionTo('digidoo.contacts');
     });
   }
 }
});

