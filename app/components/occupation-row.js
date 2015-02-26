import Ember from 'ember';

export default Ember.Component.extend({
	matchBadgeClass: Ember.computed('occupation.match', function() {
		var match = this.get('occupation.match');
		if (match === "M") {
			this.set('matchText', 'Medium');
			return 'is-medium';
		} else if (match === "H") {
			this.set('matchText', 'High');
			return 'is-high';
		}
		return '';
	})
});
