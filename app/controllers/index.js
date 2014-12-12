import Ember from 'ember';

export default Ember.Controller.extend({
  first: true,
  last: false,
  filteredContent: function() {
    var first = this.get('first'),
        last = this.get('last');
    return this.get('content').filter(function(item) {
      if (first && item.type === 'first') {
        return true;
      }

      if (last && item.type === 'last') {
        return true;
      }
    });
  }.property('first', 'last'),
});
