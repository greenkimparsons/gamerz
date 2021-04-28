const Game = require('./Game');
const Message = require('./Message');
const User = require('./User');
const Console = require('./Console');

User.hasMany(Game, {
    foreignKey: 'console_id',
})

User.hasMany(Message, {
    foreignKey: 'console_id',
})

Game.hasMany(User, {
    foreignKey: 'console_id',
})

Message.belongsTo(User, {
    foreignKey: 'console_id',
})

Console.belongsTo(User, {
    foreignKey: 'console_id',
})

Console.hasMany(Game, {
    foreignKey: 'console_id',
})

module.exports = { Game, Message, User, Console };
