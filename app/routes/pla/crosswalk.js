import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('crosswalk');
	},

	actions: {
		clearFilterQuery: function() {
			this.controllerFor('pla/crosswalk').set('filterQuery', '');
		}
	}
});
