const {Supplier} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const suppliers = await Supplier.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: suppliers
            });
        } catch (error) {
            next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const {id} = req.params;

            const supplier = await Supplier.findOne({where: {id: id}});

            if (!supplier) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: supplier
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {name, address} = req.body;

            const supplier = await Supplier.create({
                name: name,
                address: address
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: supplier
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {id} = req.params;

            const updated = await Supplier.update(req.body, {where: {id: id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${id}!`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    },

    destroy: async (req, res, next) => {
        try {
            const {id} = req.params;

            const deleted = await Supplier.destroy({where: {id: id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find supplier with id ${id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: null
            });
        } catch (error) {
            next(error);
        }
    }
};