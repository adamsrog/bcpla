import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({

	// set up sorting of the occupations
	sortCategory: '',
	sortedCourses: Ember.computed('model.content', 'sortCategory', function() {
		var model = this.get('model');
		var category = this.get('sortCategory');
		if (category === '') { return model; }
		return model.filterBy('category', category);
	}),

	// set up pagination
	pagedContent: pagedArray('sortedCourses', { perPageBinding: 'perPage' }),
  perPage: 15,

  actions: {
  	sortCoursesByCategory: function(category) {
  		this.set('sortCategory', category);
  	}
  }

});
