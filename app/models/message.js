import DS from 'ember-data';

export default DS.Model.extend({

contactRecipient: DS.attr ('string'),
body: DS.attr ('string'),
isSent: DS.attr (false),

});


