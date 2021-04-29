const Game = require('./Game');
const Message = require('./Message');
const User = require('./User');
const Console = require('./Console');

User.hasMany(Game, {
   foreignKey: 'console_id',
   constraints: false
})
User.hasMany(Message, {
    foreignKey: 'console_id',
    constraints: false
})
Game.hasMany(User, {
    foreignKey: 'console_id',
    constraints: false
})
Message.belongsTo(User, {
    foreignKey: 'console_id',
    constraints: false
})
User.hasOne(Console, {
    foreignKey:'console_id',
    constraints: false
})
Console.belongsTo(User, {
    foreignKey: 'console_id',
    constraints: false
})
Console.hasMany(Game, {
    foreignKey: 'console_id',
    constraints: false
})
Game.belongsTo(Console, {
    foreignKey: 'console_id',
    constraints: false
})
module.exports = { Game, Message, User, Console };