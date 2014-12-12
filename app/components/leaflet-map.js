import Ember from 'ember';

window.L.Icon.Default.imagePath = '/assets/leaflet';

export default Ember.Component.extend({
  classNames: ['leaflet-map'],
  render: function(buffer) {
    var mapElement = document.createElement('div');
    buffer._element.appendChild(mapElement);

    var map = window.L.map(mapElement);
    this.set('map', map);
    this._super(buffer);
  },
  didInsertElement: function() {
    this.get('map').setView([38, -92], 5);
  },
  actions: {
    popUpClicked: function() {
      this.sendAction('popup');
    },
    markerClicked: function() {
      this.sendAction('marker');
    }
  }
});

