/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import {DataTypes} from "sequelize";
import {spCatsInstance, spCatsAttribute} from "./db";

export default (sequelize: sequelize.Sequelize, DataTypes: DataTypes) => {
    return sequelize.define<spCatsInstance, spCatsAttribute>('spCats', {
        idCats: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_cats'
        },
        purchaseId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'purchase_id'
        },
        idUsername: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'id_username'
        },
        orgFee: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '15.00',
            field: 'org_fee'
        },
        itemCnt: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            field: 'item_cnt'
        },
        hidden: {
            type: DataTypes.CHAR(1),
            allowNull: false,
            field: 'hidden'
        },
        bundleVar: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: 'bundle_var'
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'name'
        },
        vars: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'vars'
        }
    }, {
        tableName: 'sp_cats',
        timestamps: false,
    });
};
