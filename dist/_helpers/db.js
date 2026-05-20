"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('../../config.json');
const promise_1 = __importDefault(require("mysql2/promise"));
const sequelize_1 = require("sequelize");
const account_model_1 = __importDefault(require("../accounts/account.model"));
const refresh_token_model_1 = __importDefault(require("../accounts/refresh-token.model"));
const db = {};
exports.default = db;
initialize().catch(err => console.error(err)); // Commented out to allow server to start without MySQL
async function initialize() {
    const { host, port, user, password, database } = config.database;
    const connection = await promise_1.default.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    const sequelize = new sequelize_1.Sequelize(database, user, password, {
        host,
        port,
        dialect: 'mysql'
    });
    db.Account = (0, account_model_1.default)(sequelize);
    db.RefreshToken = (0, refresh_token_model_1.default)(sequelize);
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);
    await sequelize.sync();
}
