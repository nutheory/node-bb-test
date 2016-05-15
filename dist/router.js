define(['jquery', 'backbone', '../views/app'], function($, Backbone, AppView){
  'use strict'

  	var BillabongRouter = Backbone.Router.extend({
  		routes: {
  			'(:page)': 'get_products'
  		},

      get_products: function(page){
        var appView = new AppView()
        appView.get_product_results()
      }

  	})

  	return BillabongRouter
})
