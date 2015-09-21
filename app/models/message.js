import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  recipient: DS.belongsTo('contact'),
  body: DS.attr('string'),
  isSent: DS.attr(false),

  send: function() {
    return Ember.$.ajax({
      method: 'POST',
      url: 'http://labortracker3.azurewebsites.net/api/messages/' + this.id + '/send'
    });
  }
});


