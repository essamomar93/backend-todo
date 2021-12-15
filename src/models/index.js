'use strict';

const userModel = require('./users.js');
const itemsModel = require('../models/items');
const Collection = require('../models/data-collection');

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);


const items = itemsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  items: new Collection(items),
}
