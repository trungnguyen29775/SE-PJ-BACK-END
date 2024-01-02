const db = require('../models');
const Product = db.products;
const { Op } = require('sequelize');
var fs = require('fs');
exports.create = async (req, res) => {
    try {
        const newProduct = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description,
            countInStock: req.body.countInStock,
            image_path: req.body.imagePath,
        };
        const check = await Product.findOne({ where: { name: newProduct.name } });
        if (check) {
            res.send('The product ID already exist.');
        } else {
            const responseData = await Product.create(newProduct);
            res.status(200).send(responseData);
        }
    } catch (err) {
        console.log('Error due to ', err);
    }
};

exports.view = async (req, res) => {
    const products = await Product.findAll();
    res.status(200).send(products);
};

exports.update = async (req, res) => {
    const newProduct = await Product.findOne({ where: { product_id: req.body.product_id } });
    if (!newProduct) {
        res.send('Could not find the product');
    } else {
        try {
            await newPerson.update(
                {
                    name: req.body.name,
                    category: req.body.category,
                    type: req.body.type,
                    price: req.body.price,
                    rating: req.body.rating,
                    description: req.body.description,
                    countlnStock: req.body.countlnStock,
                },
                {
                    where: {
                        product_id: req.body.product_id,
                    },
                },
            );
            res.redirect('/');
        } catch (err) {
            console.log('Error due to ', err);
        }
    }
};

exports.delete = async (req, res) => {
    const product_id = req.body.productId;
    console.log(product_id);
    try {
        const product = await Product.findOne({ where: { product_id: product_id } });
        if (!product) {
            res.send('This product is not exist');
        } else {
            Product.destroy({ where: { product_id: product.product_id } });
            res.status(200).send(product);
        }
    } catch (err) {
        res.status(500);
    }
};

exports.search = async (req, res) => {
    Product.findAll({
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: req.body.search,
                    },
                },
                {
                    type: {
                        [Op.like]: req.body.search,
                    },
                },
            ],
        },
    })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send('Error due to ', err);
        });
};
