const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class SemiProduct extends Sequelize.Model {}
	SemiProduct.init({
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
		modelName: 'semiProduct', 
		tableName: 'semi_products',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	SemiProduct.associate = function (models) {
		SemiProduct.belongsTo(models.machine, {foreignKey: 'machine_id'});
		SemiProduct.belongsTo(models.mfLine, {foreignKey: 'mf_line_id'});
		SemiProduct.belongsTo(models.facility, {foreignKey: 'facility_id'});
	};

	return SemiProduct;
}
