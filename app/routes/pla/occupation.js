import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('occupation');
	},

  actions: {
  	sortOccupationsByCategory: function(category) {
  		this.controllerFor('pla/occupation').set('sortCategory', category);
  	}
  }
});
