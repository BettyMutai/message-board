import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.author', 'answer.content', function() {
   return this.get('answer.author') + ' - ' + this.get('answer.content');
 }),

  myReference: Ember.inject.service(),
  
  actions: {
    addToReference(answer) {
      this.get('myReference').add(answer);
    },
   delete(answer) {
     if (confirm('Are you sure you want to delete this answer?')) {
       this.sendAction('destroyAnswer', answer);
     }
   }
 }
});
