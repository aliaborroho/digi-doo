import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.currentUser')) {
      this.transitionTo('login');
    }
  },
  model() {
    return this.get('session.currentUser');
  },

  actions: {
    submitPost(content) {
      var author = this.get('session.currentUser');
      var newPost = this.store.createRecord('post', {content, author});

      newPost.save().then(() => {
        author.save()
          .then(() => {
            this.controller.set('newPostContent', '');
          });
        }, () => {debugger;});
    }
  }
});
