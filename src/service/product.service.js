const db = require('../models');
const Product = db.products;
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
            await Product.create(newProduct);
            res.status(200).send('Create Product succeed!');
        }
    } catch (err) {
        console.log('Error due to ', err);
    }
};

exports.view = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
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
    const product_id = req.body.product_id;
    try {
        const product = await People.findOne({ where: { product_id: product_id } });
        if (!product) {
            res.send('This product is not exist');
        } else {
            People.destroy({ where: { product_id: product.product_id } });
        }
        res.redirect('/');
    } catch (err) {
        res.send('Error due to ', err);
    }
};
