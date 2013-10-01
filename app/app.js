// Import ES6 transpiler resolver
import Resolver from 'resolver';

// Ember App Kit doesn't seem to automatically import Views
import EditTodoView from 'appkit/views/edit_todo';

// Application
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION   : true,
  LOG_MODULE_RESOLVER     : true,
  LOG_TRANSITIONS         : true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS        : true,
  modulePrefix            : 'appkit',
  Resolver                : Resolver
});

export default App;