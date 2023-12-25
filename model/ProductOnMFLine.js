const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class ProductOnMFLine extends Sequelize.Model {}
	ProductOnMFLine.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
	  num: Sequelize.INTEGER,
	  name: Sequelize.STRING,
	  time: Sequelize.FLOAT,
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'productOnMFLine', 
		tableName: 'products_on_mf_lines',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	return ProductOnMFLine;
}
