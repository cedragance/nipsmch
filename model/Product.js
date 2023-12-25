const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Product extends Sequelize.Model {}
	Product.init({
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
		modelName: 'product', 
		tableName: 'products',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	Product.associate = function (models) {
		Product.belongsToMany(models.machine, {through: models.productOnMachine});
		Product.belongsToMany(models.mfLine, {through: models.productOnMFLine});
		Product.belongsTo(models.facility, {foreignKey: 'facility_id'});
	};

	return Product;
}
