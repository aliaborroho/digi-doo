import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
   // Is this going to adapter.js?  Where in adapter.js?
   return this.store.queryRecord('hospital', {});
 },
// find record instead of create

 actions: {
   submit: function(hospital) {
     hospital.save().then(() => {
       this.transitionTo('digidoo.hospitals');
     });
   }
 }
});
