// model for contractions
// need to install and use moment
import DS from 'ember-data';

export default DS.Model.extend({
  DateTime: DS.attr('string'),
  StartTime: DS.attr('string'),
  TimeSpan: DS.attr('length'),
  TimeSinceLast: DS.attr('string'),
 });
