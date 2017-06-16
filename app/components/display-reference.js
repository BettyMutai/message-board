import Ember from 'ember';

export default Ember.Component.extend({
  myReference: Ember.inject.service(),

  actions: {
    empty(answer) {
      this.get('myReference').empty(answer);
    }
  }
});
