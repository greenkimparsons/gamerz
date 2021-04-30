const Game = require("./Game");
const Message = require("./Message");
const User = require("./User");
const Console = require("./Console");

// ONE-TO-ONE FOR USER <---> CONSOLE
User.hasOne(Console, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Console.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Message, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Message.belongsTo(User, {
  foreignKey: "user_id",
});

// ONE-TO-MANY FOR CONSOLE <---> GAME
Console.hasMany(Game, {
  foreignKey: "console_id",
  onDelete: "CASCADE",
});

Game.belongsTo(Console, {
  foreignKey: "console_id",
});

Game.hasMany(Message, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Message.belongsTo(Game, {
  foreignKey: "game_id",
});

// ONE-TO-MANY FOR USER <---> MESSAGE

// ONE-TO-MANY FOR GAMES <---> MESSAGE
//ame.hasMany(Message);
//Message.belongsTo(Game);

module.exports = { Game, Message, User, Console };
