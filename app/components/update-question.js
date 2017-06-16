import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
 actions: {
   updateQuestionForm() {
     this.set('updateQuestionForm', true);
   },
   update(question) {
     var params = {
       query: this.get('query'),
       author: this.get('author'),
       image: this.get('image'),
       additional: this.get('additional'),
     };
     this.set('updateQuestionForm', false);
     this.sendAction('update', question, params);
   }
 }
});
