import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function(user){
      alert(user);
    },
    logout: function(){
      alert("logout");
    },
    register: function(user, doTransition) {
      console.log(JSON.stringify(user));
      if (doTransition !== false) {
        doTransition = true;
      }
      var _this = this;
      Ember.$.ajax({
  method: "POST",
  url: "http://localhost:4444/register",
  data: { username: user.get('username'), password: user.get('password') }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
      // Save the post
      /*user
        .save()
        .then(function(user) {
          //alert('on snap');
          var applicationController = this.controllerFor('application');
          applicationController.set('currentUser', user);
          if (doTransition) {
            _this.transitionTo('user.index');
          }
        })
        .catch(function(err) {
          console.log('Failed to create newUser !' + err.message || err);
        });*/
    }
  }
});
