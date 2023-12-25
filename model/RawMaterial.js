const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class RawMaterial extends Sequelize.Model {}
	RawMaterial.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
	  num: Sequelize.INTEGER,
	  name: Sequelize.STRING,
	  unitPrice: {
		type: Sequelize.FLOAT,
		field: 'unit_price'
	  },
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'rawMaterial', 
		tableName: 'raw_materials',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	RawMaterial.associate = function (models) {
		RawMaterial.belongsTo(models.product, {foreignKey: 'product_id'});
		RawMaterial.belongsTo(models.semiProduct, {foreignKey: 'semi_product_id'});
	};

	return RawMaterial;
}
