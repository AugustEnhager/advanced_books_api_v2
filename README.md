## {name}

Scaffolded using [NodeApiGenerator](https://www.npmjs.com/package/node-api-generator)

## Key dependencies

[Sequelize 6](https://sequelize.org/master/) is a promise-based ORM (Object Relational Mapper) for Node. It is a tool or a level of abstraction which maps/converts data in a relational database into programmatic objects.

[SequelizeCLI](https://www.npmjs.com/package/sequelize-cli) is the Sequelize Command Line Interface (CLI) that brings thee power Sequelize generators to the your terminal.

[Mocha](https://mochajs.org/) is a test framework running on Node. Used in both unit tests as well as in request specs (features).

[Chai](https://www.chaijs.com/api/bdd/) is a BDD / TDD assertion library for Node.

[FactoryGirl](https://www.npmjs.com/package/factory-girl) provides factory methods to create test fixtures for automated software testing. Used in both unit tests as well as in request specs (features).

[FakerJS](https://www.npmjs.com/package/faker) helps you real looking data to your tests or database seeders, and it also can be pretty entertaining.


## License

[MIT](LICENSE)

# Notes

Once you've generated your application, cd'ed (is that a verb?) into the project folder and installed the dependencies, you need to run a few commands to get the database started.

NOTE: You need to install SequelizeCLI separately or use it with `npx` for the commands below.

```
$ npm install -g sequelize-cli
```
```
$ sequelize --help
// or
$ npx sequelize --help
```

### Create the database

```
$ sequelize db:create && NODE_ENV=test sequelize db:create && sequelize db:migrate && NODE_ENV=test sequelize db:migrate
```

You should get an output similar to this:

```
Sequelize CLI [Node: 14.8.0, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "database/config/config.json".
Using environment "development".
Database test_api_development created.

Sequelize CLI [Node: 14.8.0, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "database/config/config.json".
Using environment "test".
Database test_api_test created.

Sequelize CLI [Node: 14.8.0, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "database/config/config.json".
Using environment "development".
No migrations were executed, database schema was already up to date.

Sequelize CLI [Node: 14.8.0, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "database/config/config.json".
Using environment "test".
No migrations were executed, database schema was already up to date.
```

### Run tests
We've created one request spec, and one model spec for you as reference. Execute them by running:

```
$ yarn test
```

### Run tests in VSCode

You can configure your VSCode to run your tests. That will allow you to set breakpoints and use the `debugger` command and halt the execution of your code.

Go through the process of creating the `launch.json` file in VSCode and add the following configuration:

```json
"configurations": [
    {
      "name": "Launch Program",
      "program": "${workspaceFolder}/bin/www",
      "request": "launch",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "pwa-node"
    },
    {
      "type": "pwa-node",
      "request": "launch",
      "name": "Mocha tests",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "--recursive",
        "--timeout",
        "999999",
        "--colors",
        "--exit",
        "specs"
      ],
      "env": {
        "NODE_ENV": "test",
        "NODE_NO_WARNINGS": "1" // let's stick our head in the sand and silence all warnings
      },
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
```

### Defining Factories

Visit the [FactoryGirl](https://www.npmjs.com/package/factory-girl) documentation for more details. Here, we will show you how to create a basic factory that you can use to test your model and to create fake instances for use in tests. Lets say you have a basic `User` model:

```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```

Then, in your `specs/factories` folder, create a `users.js` with the following code:

```js
module.exports = (factory, Models) => {
  factory.define('User', Models.User, {
    firstName: 'Random',
    lastName: 'Guy',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}
```

You can use your factory to create one or many instances of the `User` model:

```js
let author = await factory.create('User')
```

```js
await factory.createMany('Book', 2, [
      { firstName: "Custom", lastName: "Name" },
      { firstName: "Another", lastName:"Name" }
    ])
```

There are many other use cases for factories. Make sure to check the documentation for each dependency.