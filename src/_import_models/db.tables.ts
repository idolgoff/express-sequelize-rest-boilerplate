// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  spCats:def.spCatsModel;
  spPurchases:def.spPurchasesModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    spCats: seq.import(path.join(__dirname, './sp_cats')) as def.spCatsModel,
    spPurchases: seq.import(path.join(__dirname, './sp_purchases')) as def.spPurchasesModel,
  };
  return tables;
};
