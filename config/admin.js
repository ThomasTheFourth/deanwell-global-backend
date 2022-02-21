module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a496fb72b821beb1b91a096d0aabcba'),
  },
});
