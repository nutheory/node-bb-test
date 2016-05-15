require.config({
  shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
  paths: {
    'backbone':     'lib/backbone-min',
    'underscore':   'lib/underscore-min',
    'bootstrap':    'lib/bootstrap.min',
    'jquery':       'lib/jquery.min'
  }
})

require(['backbone', '../router'], function(Backbone, Router){
	// Initialize routing and start history
	new Router()
	Backbone.history.start({pushState: true})

})
