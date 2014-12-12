import LeafComponent from '../components/leaf-base';

export default LeafComponent.extend({
  attach: function() {
    var marker = this.L.marker([
      this.get('location.lat'),
      this.get('location.lng')]
    ).addTo(this.get('map'));
    this.set('location.marker', marker);

    marker.on('click', () => {
      this.sendAction();
    });
  },
  detach: function() {
    var marker = this.get('location.marker');
    this.get('map').removeLayer(marker);
  }
});

