import LeafComponent from '../components/leaf-base';

export default LeafComponent.extend({
  attach: function() {
    this.L.tileLayer('http://{s}.tiles.mapbox.com/v3/jerel.l190fknj/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(this.get('map'));
  }
});
