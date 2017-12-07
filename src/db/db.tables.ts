// tslint:disable
import * as path from "path";
import * as sequelize from "sequelize";

export const getModels = (seq: sequelize.Sequelize) => {
    const spCats = seq.import(path.join(__dirname, './sp_cats'))
    const spPurchases = seq.import(path.join(__dirname, './sp_purchases'))
    // if (seq && spCats && spPurchases) {
    //     spCats.belongsTo(spPurchases)
    //     spPurchases.hasMany(spCats)
    // }
    return {
        spCats,
        spPurchases
    }
};

