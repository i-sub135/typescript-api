/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_testing', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    insert: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 't_testing',
     timestamps: false,
  });
};
