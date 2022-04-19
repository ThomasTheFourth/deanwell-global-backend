module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products-list",
      handler: "products-list.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
