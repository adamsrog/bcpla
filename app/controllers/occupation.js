import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({

	// set up sorting of the occupations
	sortCategory: '',
	sortedOccupations: Ember.computed('model.content', function() {
		var model = this.get('model');
		return model.filterBy('category', 'Healthcare Technology');
	}),

	// set up pagination
	pagedContent: pagedArray('sortedOccupations', { perPageBinding: 'perPage' }),
  perPage: 15

});
