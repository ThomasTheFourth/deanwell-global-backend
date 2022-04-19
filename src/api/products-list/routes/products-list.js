module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products-list.json",
      handler: "products-list.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
