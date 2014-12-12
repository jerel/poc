import LeafComponent from '../components/leaf-base';

export default LeafComponent.extend({
  render: function(buffer) {
    buffer._element = document.createElement('div');
    this.get('location.marker').bindPopup(buffer._element);
    this._super(buffer);
  },
  detach: function() {
    this.get('location.marker').unbindPopup();
  },
  actions: {
    popUpClicked: function() {
      this.sendAction();
    }
  }
});

