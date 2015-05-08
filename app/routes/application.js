import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.$.getJSON('/api/Transmissions/?filter[where][and][0][yearid]=2004&filter[where][and][1][regionname]=Mexico');
	}
});
