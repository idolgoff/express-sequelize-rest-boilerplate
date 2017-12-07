# Server side boilerplate with TypeScript, Sequelize...

This is a boilerplate for development rest api using existing database
It allows to generate models from db and use them after with minimum hand correction

It uses express, finale, sequelize, sequelize-auto, typescript 
Powered by webpack or ts-node-dev with server auto-reload

## Structure
```bash
> ./_import_models/    - auto imported models
> ./db/                - models after hand correction
> ./rest.ts            - apply finale-rest
> ./index.ts           - main file
```

## Scripts

For everyday development and live reloading
```bash
npm run server:dev
```

For dev build with webpack
```bash
npm run dev
```

For production build with webpack
```bash
npm run build
```

## Sequelize

Import model from existing database

```bash
sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName] -C
```

## Auto import

Import works pretty well but after that be careful with table def.types
Adding _as_ lets it work with ts-node-dev server without errors 

```typescript
 export const getModels = function(seq:sequelize.Sequelize):ITables {
   const tables:ITables = {
     spCats: seq.import(path.join(__dirname, './sp_cats')) → as def.spCatsModel ←,
     spPurchases: seq.import(path.join(__dirname, './sp_purchases')) → as def.spPurchasesModel ←,
   };
   return tables;
 };
 ```