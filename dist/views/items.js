define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict'

	var ItemView = Backbone.View.extend({

		template: _.template($('#product_template').html()),

		events: {
			'click li':		'view_item'
		},

		view_item: function (e) {
			var link = $(e.currentTarget).data('url')
			window.location.href = link
		},

		render: function () {
			this.$el.html(this.template({item: this.model}))
			return this
		}

	})
	return ItemView
})
