import NodeBaseComponent from '../components/node-base';

export default NodeBaseComponent.extend({
  isLeafComponent: true,
  init: function() {
    this._super();
    var insert = this.constructor.renderer.insertElement;

    this.constructor.renderer.insertElement = function(view, parentView, element, index) {
      if ( ! view.isLeafComponent) {
        return insert(view, parentView, element, index);
      }
    };
  },
});

