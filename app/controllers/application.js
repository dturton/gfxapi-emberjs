import Ember from 'ember';

export default Ember.Controller.extend({
	countries: function(){;
		return this.get("model")
	}.property("model")
});
