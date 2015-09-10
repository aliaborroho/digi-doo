import DS from 'ember-data';



export default DS.RESTAdapter.extend({
  host: 'http://labortracker2.azurewebsites.net',
  namespace: 'api',
  // actions: {
  //   createRecord: function() {
  //     this.controller.set('background', true);
  //   }.on('activate'),

  //   hideBackground: function() {
  //     this.controller.set('background', false);
  //   }.on('deactivate'),
  // }
});
