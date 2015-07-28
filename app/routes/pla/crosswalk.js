import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('crosswalk');
	},

	actions: {
		clearFilterQuery: function() {
			this.controllerFor('pla/crosswalk').set('filterQuery', '');
		},
		clearCategories: function() {
			this.controllerFor('pla/crosswalk').set('sortCategories', []);
		}
	}
});
