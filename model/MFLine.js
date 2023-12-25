const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class MFLine extends Sequelize.Model {}
	MFLine.init({
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
		modelName: 'mfLine', 
		tableName: 'mf_lines',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	MFLine.associate = function (models) {
		MFLine.belongsTo(models.facility, {foreignKey: 'facility_id'});
		MFLine.hasMany(models.machine, {as: 'machines', foreignKey: 'mf_line_id'});
		MFLine.hasMany(models.powerConsumption, {as: 'powerConsumptions', foreignKey: 'mf_line_id', onDelete: 'CASCADE'});
	};
	
	return MFLine;
}
