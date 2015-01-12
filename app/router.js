import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("pla", function() {
  	this.route("occupation");
  	this.route("crosswalk");
  });
});

export default Router;