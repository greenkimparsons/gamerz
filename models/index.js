const Game = require('./Game');
const Message = require('./Message');
const User = require('./User');
const Console = require('./Console');

// ONE-TO-ONE FOR USER <---> CONSOLE
User.hasOne(Console, {
    foreignKey: 'console_id',
    constraints: false
})

Console.belongsTo(User, {
    foreignKey: 'console_id',
    constraints: false
})

// ONE-TO-MANY FOR CONSOLE <---> GAME
Console.hasMany(Game, {
    foreignKey: 'console_id',
    constraints: false
})

Game.belongsTo(Console, {
    foreignKey: 'console_id',
    constraints: false
})

// ONE-TO-MANY FOR USER <---> MESSAGE
User.hasMany(Message, {
    foreignKey: 'message_id',
    constraints: false
})

Message.belongsTo(User, {
    foreignKey: 'message_id',
    constraints: false
})

// ONE-TO-MANY FOR GAMES <---> MESSAGE
Game.hasMany(Message);
Message.belongsTo(Game);


module.exports = { Game, Message, User, Console };