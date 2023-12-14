const db = require('../models')
const User = db.user
var fs = require('fs');
exports.login = async (req,res) => {
    const user = {
        name: req.body.name,
        password: req.body.password,
    }
    const checkName = await User.findOne({where: {name : user.name}})
    if (checkName){
        if (user.password === checkName.password){
            res.redirect('/');
        }
    } else {
        res.send("User name doesn't exist.")
    }
}

exports.signup = async (req, res) => {
  try {
    const newUser = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        isAdmin: false,
    }
    const checkName = await User.findOne({where: {name : newUser.name}})
    if(checkName) {
        res.send('The username already exist.');
    } else{
        await User.create(newUser);
        res.redirect('/');
    }
  } catch(err) {
    console.log("Error due to ",err)
  }
};

exports.changePassword = async (req,res)=>{
    try{
        await User.update({password : req.body.password},{
            where: {
                name : req.body.user_id
            }
        }
        )
    } catch(err) {
        console.log("Error due to ",err)
    }
}

