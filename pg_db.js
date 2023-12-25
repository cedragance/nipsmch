const Sequelize = require('sequelize');
const properties = require("./properties.json");

const pgConfig = {
    host: properties.pgsql.host,
    user: properties.pgsql.user,
    password: properties.pgsql.password,
    database: properties.pgsql.database,
    schema: properties.pgsql.schema,
    port: properties.pgsql.port
};

const pgSequelize = new Sequelize(
							pgConfig.database, pgConfig.user, pgConfig.password, 
							{
								host: pgConfig.host,
								port: pgConfig.port,
								dialect: 'postgres',
								dialectOptions: {
									ssl: true
								},
								schema: pgConfig.schema,
								pool: {
									max: 5,
									min: 0,
									acquire: 30000,
									idle: 10000
								}
							}
						);

module.exports = pgSequelize;
