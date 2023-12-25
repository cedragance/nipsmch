var express = require("express")
var router = express.Router()

const pgSequelize = require('../../../pg_db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const models = pgSequelize.models;

router.get('/', (req, res) => {
	let filter = req.query.filter;
	if(!filter || filter=='')
		res.send([]);
	else {
		filter = filter + '%';
		models.machine.findAll({
			where: {
				[Op.or]: [
					{mark: {[Op.like]: filter}}, 
					{name: {[Op.like]: filter}}
				]
			},
			include: [ 
						{ 
							model: models.powerConsumption, 
							as: 'powerConsumptions' 
						} 
					 ]
		}).then(machines => {
			res.send(machines);
		});
	}
})

router.get('/:id', (req, res) => {
	let machineId = req.params.id;
	models.machine.findOne({
		where: {
			id: machineId
		},
		include: [ 
					{ 
						model: models.powerConsumption, 
						as: 'powerConsumptions' 
					} 
				 ]
	}).then(machine => {
		res.send(machine);
	});
})

router.post('/', (req, res) => {
	let machine = req.body;
	if(!machine.id)
		models.machine.create(machine, {
			include : [
				{ 
					model: models.powerConsumption, 
					as: 'powerConsumptions' 
				}
			]	
	}).then((m) => {
			res.send("Created machine " + m.id);
		});
	else
		models.machine.update(machine, {
			where: {
				id: machine.id
			},
			include : [
				{ 
					model: models.powerConsumption, 
					as: 'powerConsumptions' 
				}
			]
		}).then((m) => {
			res.send("Updated machine " + machine.id);
		});
})

router.delete('/:id', (req, res) => {
	let machineId = req.params.id;
	models.machine.destroy({
		where: {
			id: machineId
		}
	}).then((m) => {
		res.send("Deleted machine.");
	});
})

module.exports = router;
