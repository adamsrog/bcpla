import Ember from 'ember';

export function matchBadge(input) {
	var html = '';
	if (input === "M") { 
		html = '<span class="badge" style="background-color: #FFB03B;">Medium</span>'; 
	}
	else if (input === "H") { 
		html = '<span class="badge" style="background-color: #468966;">High</span>'; 
	}
  return new Ember.Handlebars.SafeString(html);
}

export default Ember.Handlebars.makeBoundHelper(matchBadge);
