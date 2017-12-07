// tslint:disable
import * as Sequelize from 'sequelize';


// table: spCats
export interface spCatsAttribute {
  idCats:number;
  purchaseId:number;
  idUsername:number;
  orgFee:number;
  itemCnt:number;
  hidden:string;
  bundleVar:string;
  name:string;
  vars:string;
}
export interface spCatsInstance extends Sequelize.Instance<spCatsAttribute>, spCatsAttribute { }
export interface spCatsModel extends Sequelize.Model<spCatsInstance, spCatsAttribute> { }

// table: spPurchases
export interface spPurchasesAttribute {
  idPurchases:number;
  idUsername:number;
  nextDate:string;
  archive:string;
  paySum:number;
  payInfo:string;
  name:string;
  state:string;
  forumUrl:string;
  paymentInfo:string;
  purchaseTheme:number;
  anonymousAccess:number;
  isForeign:number;
  status:number;
  statusDate:number;
  minSum:number;
  adult:number;
  campaign:number;
  active:number;
  disableOrders:number;
  inviteUrl?:string;
  purchaseTemplateId?:number;
  cashback:number;
}
export interface spPurchasesInstance extends Sequelize.Instance<spPurchasesAttribute>, spPurchasesAttribute { }
export interface spPurchasesModel extends Sequelize.Model<spPurchasesInstance, spPurchasesAttribute> { }
