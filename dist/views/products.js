define([
	'jquery',
	'underscore',
	'backbone',
	'../views/items'
], function ($, _, Backbone, ItemView) {
	'use strict'

	var ProductsView = Backbone.View.extend({

		el: '#products',

    initialize: function () {

    },

		addOne: function(productItem){
			var itemView = new ItemView({ model: productItem })
			this.$el.append(itemView.render().el)
		},

		addAll: function(){
			this.collection.forEach(this.addOne, this)
		},

		render: function(){
			this.addAll()
			return this
		}

  })

	return ProductsView
})
