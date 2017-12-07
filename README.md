# Server side boilerplate with TypeScript, Sequelize...

This is a boilerplate for development with express, typescript powered by webpack with server side hot-reload

## Structure
```bash
> _import_models    - auto imported models
> db                - models after hand correction
> rest.ts           - apply finale-rest
> index.ts          - main file
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
Added _as_ to let it work with ts-node-dev without errors 

```bash
 export const getModels = function(seq:sequelize.Sequelize):ITables {
   const tables:ITables = {
     spCats: seq.import(path.join(__dirname, './sp_cats')) → as def.spCatsModel ←,
     spPurchases: seq.import(path.join(__dirname, './sp_purchases')) → as def.spPurchasesModel ←,
   };
   return tables;
 };
 ```