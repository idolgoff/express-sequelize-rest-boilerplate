/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {spPurchasesInstance, spPurchasesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<spPurchasesInstance, spPurchasesAttribute>('spPurchases', {
    idPurchases: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_purchases'
    },
    idUsername: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'id_username'
    },
    nextDate: {
      type: DataTypes.CHAR(19),
      allowNull: false,
      field: 'next_date'
    },
    archive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'archive'
    },
    paySum: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'pay_sum'
    },
    payInfo: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'pay_info'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'state'
    },
    forumUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'forum_url'
    },
    paymentInfo: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'payment_info'
    },
    purchaseTheme: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'purchase_theme'
    },
    anonymousAccess: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'anonymous_access'
    },
    isForeign: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'is_foreign'
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
      field: 'status'
    },
    statusDate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'status_date'
    },
    minSum: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      field: 'min_sum'
    },
    adult: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'adult'
    },
    campaign: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'campaign'
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'active'
    },
    disableOrders: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'disable_orders'
    },
    inviteUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'invite_url'
    },
    purchaseTemplateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'purchase_template_id'
    },
    cashback: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'cashback'
    }
  }, {
    tableName: 'sp_purchases',
    timestamps: false,
  });
};
