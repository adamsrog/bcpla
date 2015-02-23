import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration Tests', {
	beforeEach: function() {
		App = startApp();
	},
	afterEach: function() {
		Ember.run(App, App.destroy);
	}
});

test('Page contents', function(assert) {
	assert.expect(3);
	visit('/').then(function() {
		assert.equal(find('.navbar').length, 1, 'Navbar is present');
		assert.equal(find('.footer').length, 1, "Footer is present");
		assert.equal(find('.btn-view-occupation').length, 1, "Button is present");
	});
});

test('User interaction', function(assert) {
	assert.expect(1);
	visit('/').then(function() {
		click('.btn-view-occupation').then(function() {
			assert.equal(currentRouteName(), 'pla.crosswalk', 'Clicking button transitions to crosswalk route');
		});
	});
});