define([
	'jquery',
	'underscore',
	'backbone',
	'../views/products',
	'../collections/product_list'
], function ($, _, Backbone, ProductsView, ProductList) {
	'use strict'

	var AppView = Backbone.View.extend({

		el: "#billabong-app",

		events: {
			'click #more_results':		'fetch_more_results'
		},

		initialize: function () {
			$('#about').fadeIn()
    },

		get_product_results: function(page){
			this.page = page || 1
			var productList = new ProductList()
			productList.fetch({reset: true, data: {page: this.page, page_size: 4}}).then(function(res){
				var productsView = new ProductsView({collection: res})
				productsView.render().el
			})
		},

		fetch_more_results: function (e) {
			e.preventDefault()
			this.get_product_results(this.page + 1)
			$('#more_results').fadeOut()
		}

	})

	return AppView
})
