import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['q'],
  q: null

  actions: {
    doSearch: function () {
      var input = this.get('term');

      this.store.find('post', {q: input}).then(function () {
        this.set('model', posts);
      }.bind(this))
    }
  }
});
