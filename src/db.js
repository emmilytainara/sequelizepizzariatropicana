let Sequelize = require("sequelize");

let db = new Sequelize(
    "connectionString:'postgres://puywwxvipodsjk : 0a646a05b59d358407c7172a999665ccbcf3676a05f7b9e706e0eed3350bfbe0 @ ec2-34-192-58-41.compute-1.amazonaws.com : 5432 / dfdu03fhl5kptbpt",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        }
    });

    module.exports = db;
    