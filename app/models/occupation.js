import DS from 'ember-data';

var Occupation = DS.Model.extend({
	startDate: DS.attr('string'),
	endDate: DS.attr('string'),
	title: DS.attr('string'),
	category: DS.attr('string')
});

Occupation.reopenClass({
	FIXTURES: []
});

export default Occupation;
