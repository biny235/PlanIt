const conn = require('./conn');
const { Sequelize } = conn;

const Place = conn.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Place;
