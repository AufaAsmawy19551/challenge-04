const {ProductComponent} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const productComponents = await ProductComponent.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: productComponents
            });
        } catch (error) {
            next(error);
        }
    },

    show: async (req, res, next) => {
        try {
            const {id} = req.params;

            const productComponent = await ProductComponent.findOne({where: {id: id}});

            if (!productComponent) {
                return res.status(404).json({
                    status: false,
                    message: `can't find productComponent with id ${id}!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: productComponent
            });
        } catch (error) {
            next(error);
        }
    },

    store: async (req, res, next) => {
        try {
            const {product_id, component_id} = req.body;

            const productComponent = await ProductComponent.create({
              product_id: product_id,
              component_id: product_id,
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: productComponent
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const {id} = req.params;

            const updated = await ProductComponent.update(req.body, {where: {id: id}});

            if (updated[0] == 0) {
                return res.status(404).json({
                    status: false,
                    message: `can't find productComponent with id ${id}!`,
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

            const deleted = await ProductComponent.destroy({where: {id: id}});

            if (!deleted) {
                return res.status(404).json({
                    status: false,
                    message: `can't find productComponent with id ${id}!`,
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