// model for contractions
// need to install and use moment
import DS from 'ember-data';

export default DS.Model.extend({
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  timeSinceLastMS: DS.attr('string'),
});
