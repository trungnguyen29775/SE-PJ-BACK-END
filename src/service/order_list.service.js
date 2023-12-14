const db = require('../models')
const List = db.order_list
var fs = require('fs');

exports.viewList = async (req, res) => {
  const list = await List.findAll({where : {order_id: req.order_id}});
  res.json(cart)
};


exports.addProduct = async (req,res)=>{    
    try{
        await List.create({
            order_list_id : req.body.order_list_id,
            product_id : req.body.product_id,
            order_id: req.body.order_id
        })
        res.redirect('/')
    }
    catch(err)
    {
      res.send('Error due to ',err)
    }
   
}

exports.removeProduct = async (req, res) => {
    try {
        await List.destroy({where: {order_list_id: req.body.order_list_id}})
    } catch (err) {
        res.send('Error due to ',err)
    }
}
