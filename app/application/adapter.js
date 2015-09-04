import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://labortracker.azurewebsites.net',
  namespace: 'api',
  // actions: {
  //   showBackground: function() {
  //     this.controller.set('background', true);
  //   }.on('activate'),

  //   hideBackground: function() {
  //     this.controller.set('background', false);
  //   }.on('deactivate'),
  // }
});
