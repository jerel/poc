import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var locations = [];
    for (var i=0; i < 250; i++) {
      var n1 = Math.floor(Math.random() * 50) + 30;
      var n2 = Math.floor(Math.random() * 50) - 100;
      locations.push({id: i, lat: n1, lng: n2, type: (i < 125 ? 'first' : 'last')});
    }
    return locations;
  },
  actions: {
    popUpClicked: function() {
      this.controller.set('popUpMessage', 'You clicked a popup at least once');
    },
    markerClicked: function() {
      this.controller.set('markerMessage', 'You clicked a marker at least once');
    }
  }
});

