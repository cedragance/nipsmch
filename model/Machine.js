const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Machine extends Sequelize.Model {}
	Machine.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
	  mark: Sequelize.STRING,
	  num: Sequelize.INTEGER,
	  name: Sequelize.STRING,
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'machine', 
		tableName: 'machines',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);

	Machine.associate = function (models) {
		Machine.belongsTo(models.facility, {foreignKey: 'machine_id'});
		Machine.belongsTo(models.mfLine, {foreignKey: 'mf_line_id'});
		Machine.hasMany(models.powerConsumption, {as: 'powerConsumptions', foreignKey: 'machine_id', onDelete: 'CASCADE'});
		Machine.belongsTo(models.semiProduct, {as: 'semiProducts', foreignKey: 'machine_id'});
		Machine.belongsToMany(models.product, {as: 'products', through: models.productOnMachine});
	};

	return Machine;
}
