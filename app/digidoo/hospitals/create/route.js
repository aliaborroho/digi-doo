import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   //return Ember.$.ajax('http://labortracker.azurewebsites.net/api/hospitals');
   // Is this going to adapter.js?  Where in adapter.js?
   this.store.createRecord('hospitals');
 },


 actions: {
   submit: function(form) {
     form.save().then(() => {
       this.transitionTo('/');
     });
   }
 }
});
