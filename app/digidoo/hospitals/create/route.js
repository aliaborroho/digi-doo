import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   return Ember.$.ajax('http://labortracker.azurewebsites.net/api/hospitals');
   // Is this going to adapter.js?  Where in adapter.js?
   return this.store.createRecord('hospital');
 },


 actions: {
   submit: function(hospital) {
     hospital.save().then(() => {
       this.transitionTo('/');
     });
   }
 }
});
