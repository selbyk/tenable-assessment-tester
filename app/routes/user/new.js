import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    // Set the post template to controller
    controller.set('newUser', model);
  },
  model: function(){
    // Make the post template
    return {
      username: '',
      password: ''
    };
  }
});
