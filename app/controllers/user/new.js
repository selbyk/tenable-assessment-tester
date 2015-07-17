import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(){
      // Set the data to post route action
      this.send('register', this.store.createRecord('user', this.get("newUser")));
    }
  }
});
