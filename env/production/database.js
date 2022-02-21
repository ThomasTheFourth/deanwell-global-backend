module.exports = ({ env }) => {
	const parse = require("pg-connection-string").parse;
	const config = parse(env("DATABASE_URL", "127.0.0.1"));

	const devConfig = {
		client: "postgres",
		connection: {
			host: env("DATABASE_HOST", "127.0.0.1"),
			port: env.int("DATABASE_PORT", 5432),
			database: env("DATABASE_NAME", "db_name"),
			user: env("DATABASE_USERNAME", "root"),
			password: env("LOCAL_DB_PASSWORD"),
			ssl: env.bool("DATABASE_SSL", false),
		},
	};

	const prodConfig = {
		client: "postgres",
		connection: {
			host: config.host,
			port: config.port,
			database: config.database,
			user: config.user,
			password: config.password,
			ssl: {
				rejectUnauthorized: false,
			},
		},
		debug: false,
	};

	return env("NODE_ENV", "development") === "production" ? prodConfig : devConfig
};
