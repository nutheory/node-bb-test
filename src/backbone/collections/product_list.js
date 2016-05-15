define([
	'underscore',
	'backbone',
	'../models/product_item'
], function (_, Backbone, ProductItem) {
	'use strict';

	var ProductList = Backbone.Collection.extend({
    Model: ProductItem,
    url: '/products',

    initialize: function () {

    }

  })

  return ProductList
})
