import Ember from 'ember';

var Mixin = Ember.Mixin.create({
  attach: function() {
    return this;
  },
  detach: function() {
    return this;
  },
});

export default Ember.Component.extend(Mixin, {
  L: window.L,
  tagName: '',
  render: function(buffer) {
    this._super(buffer);
    this.attach();
  },
  destroy: function() {
    this.detach();
    this._super();
  }
});

