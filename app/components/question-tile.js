import Ember from 'ember';

export default Ember.Component.extend({
  isAdditionalShowing: false,
  actions: {
    additionalShow: function() {
      this.set('isAdditionalShowing', true);
    },
    additionalHide: function() {
      this.set('isAdditionalShowing', false);
    }
  }
});
