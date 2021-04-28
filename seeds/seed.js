const sequelize = require('../config/connection');
const { User, Message } = require('../models');

const userData = require('./userData.json');
const messageData = require('./messageData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const message of messageData) {
    await Message.create({
      ...message,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
