const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class PowerConsumption extends Sequelize.Model {}
	PowerConsumption.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
		field: 'id'
      },
	  num: Sequelize.INTEGER,
	  name: {
		type: Sequelize.STRING,
		field: 'name'
	  },
	  power: {
		type: Sequelize.FLOAT,
		field: 'power'
	  },
	  powerFactor: {
	    type: Sequelize.FLOAT,
	    field: 'power_factor'
	  },
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'powerConsumption', 
		tableName: 'power_consumptions',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	PowerConsumption.associate = function (models) {
		PowerConsumption.belongsTo(models.machine, {foreignKey: 'machine_id'});
		PowerConsumption.belongsTo(models.mfLine, {foreignKey: 'mf_line_id'});
		PowerConsumption.belongsTo(models.facility, {foreignKey: 'facility_id'});
	};

	return PowerConsumption;
}
