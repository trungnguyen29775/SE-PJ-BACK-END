const db = require('../models')
const Cart = db.shopping_cart
var fs = require('fs');

exports.viewCart = async (req, res) => {
  const cart = await Cart.findAll({where : {user_id: req.user_id}});
  res.json(cart)
};

exports.update = async (req,res)=>
{
    const Identify_card_ID = req.body.Identify_card_ID;
    const newPerson = await People.findOne({where:{Identify_card_ID:Identify_card_ID}})
    console.log(Identify_card_ID)
    if(!newPerson)
    {
      res.send('Could not find this person')
    }
    else
    {
      newPerson.Name = req.body.Name;
      newPerson.Address=req.body.Address;
      newPerson.Dob=req.body.Dob;
      newPerson.Nationality=req.body.Nationality;
      try
      {
        await newPerson.save();
        res.redirect('/people')
      }
      catch(err)
      {
        console.log('Some thing went wrong due to ',err)
      }
    }
}

exports.addProduct = async (req,res)=>{    
    try{
        await Cart.create({
            shopping_cart_id : req.body.shopping_cart_id,
            product_id : req.body.product_id,
            user_id : req.body.user_id
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
        await Cart.destroy({where: {shopping_cart_id: req.body.shopping_cart_id}})
    } catch (err) {
        res.send('Error due to ',err)
    }
}

exports.completePayment = async (req,res)=>{    
    try{
      
        Cart.destroy({where:{user_id : req.body.user_id}})
        res.redirect('/')
    }
    catch(err)
    {
      res.send('Error due to ',err)
    }
   
}