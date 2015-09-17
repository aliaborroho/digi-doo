import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   return Ember.$.ajax('http://labortracker.azurewebsites.net/api/hospitals');
   // Is this going to adapter.js?  Where in adapter.js?
   return store.createRecord('hospital');
 },
// find record instead of create

 actions: {
   submit: function(hospital) {
     hospital.save().then(() => {
       this.transitionTo('/');
     });
   }
 }
});
