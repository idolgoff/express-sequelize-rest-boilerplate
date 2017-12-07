import * as finale from "finale-rest";
import * as dbTables from "./_import_models/db.tables";
import * as Sequelize from "sequelize";

const sequelize = new Sequelize('db', 'dbUser', 'dbPass', {
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
})

const rest = (app) => {
    finale.initialize({
        app,
        sequelize
    })

    const tables = dbTables.getModels(sequelize);

    const spPurchasesResource = finale.resource({
        model: tables.spPurchases,
        endpoints: ['/purchases', '/purchases/:id_purchases']
    })
}

export default rest