const Game = require('./Game');
const Message = require('./Message');
const User = require('./User');

User.hasMany(Game, {
    foreignKey: 'game_id',
})

User.hasMany(Message, {
    foreignKey: 'game_id',
})

Game.hasMany(User, {
    foreignKey: 'game_id',
})

Message.belongsTo(User, {
    foreignKey: 'game_id',
})

module.exports = { Game, Message, User };