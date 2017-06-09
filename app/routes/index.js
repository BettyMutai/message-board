import Ember from 'ember';

var questions = [{
  question: "Why are cars so expensive?",
  author: "Sandy Francisco",
  additional: "I have been trying to get a car but i can't afford any so far"
}, {
  question: "Is it advisable to drink contaminated water",
  author: "Someone Worried",
  additional: "I drank some water at school and i'm worried because they announced its contaminated"
}, {
  question: "Can anyone learn to code?",
  author: "Aspiring Programmer",
  additional: "I want to learn to code but i have no background whatsoever just how to use a computer"
}];


export default Ember.Route.extend({
  model() {
    return questions;
  },
});
