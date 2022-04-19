"use strict";

module.exports = {
  async findAll() {
    const products = await strapi.query("products").findAll();
    return products;
  },
};
