import Ember from "ember";
import config from "./config/environment";
import googlePageView from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageView, {
  location: config.locationType
});

Router.map(function() {
  this.resource("pla", function() {
  	this.route("occupation");
  	this.route("crosswalk");
  });
  this.route('occupation');
  this.route('crosswalk');
});

export default Router;