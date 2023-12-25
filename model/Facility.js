const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Facility extends Sequelize.Model {}
	Facility.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      num: Sequelize.INTEGER,
	  name: Sequelize.STRING,
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'facility', 
		tableName: 'facilities',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);

	Facility.associate = function (models) {
		Facility.hasMany(models.machine, {as: 'machines', foreignKey: 'facility_id'});
		Facility.hasMany(models.mfLine, {as: 'mfLines', foreignKey: 'facility_id'});
		Facility.hasMany(models.powerConsumption, {as: 'powerConsumptions', foreignKey: 'facility_id', onDelete: 'CASCADE'});
	};
		
	return Facility;
}
