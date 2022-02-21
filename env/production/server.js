module.exports = ({ env }) => ({
  url: env("deanwell-global-backend"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
