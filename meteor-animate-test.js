Router.configure({
  layoutTemplate: 'hello'
});

Router.route('/', function(){Router.go('one')})
Router.route('one');
Router.route('two');
