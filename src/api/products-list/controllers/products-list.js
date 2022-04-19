"use strict";

module.exports = {
  async findAll(ctx) {
    const products = strapi.entityService.findMany("api::product.product");

    return (await products).map((product) => {
      return {
        id: product.snipCartId,
        price: product.price,
        url: "https://d12wr7ozry99zf.cloudfront.net/api/products-list",
      };
    });
  },
};
