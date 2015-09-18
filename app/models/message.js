import DS from 'ember-data';

export default DS.Model.extend({

  recipient: DS.belongsTo('contact'),
  body: DS.attr('string'),
  isSent: DS.attr(false),

});


