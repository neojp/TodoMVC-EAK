var TodosRoute = Ember.Route.extend({
  model: function () {
    // return this.store.find('todo');
    return this.container.lookupFactory('model:todo');
  }
});

export default TodosRoute;