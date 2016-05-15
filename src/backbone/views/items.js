/*
Populate template and setup event for products

Sample Json for template
{
	"id": "1",
	"url":"https://us.billabong.com/shop/product/mens-boardshorts/tribong-x-pro-1?color=STH",
	"img":"https://cdn-us-ec.yottaa.net/53c4b5f23c88163c9e00015b/us.billabong.com/v~12.54/media/filter/m/img/m112ftbp_sth_1.jpg?yocs=_&yoloc=us",
	"name":"TRIBONG X PRO BOARDSHORT",
	"price":"$99.95"
}
*/
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
