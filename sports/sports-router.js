const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SportModel = require('./sports-model')

const { validateUser } = require("../users/users-helpers.js");

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
    let team = req.body;
    console.log(team)
    //always validate data before sending to db
    const validateResult = validateUser(team);

    if (validateResult.isSuccessful === true){

    const hash = bcrypt.hashSync(team.password, 10); // 2 ^ n
   team.password = hash;
    console.log(`hash`, hash)
  
    SportsModel.add(team)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(err => {
        res.status(500).json(err);
      });

    } else {
        res.status(400).json({
            message: 'Invalid info about user',
        errors: validateResult.errors})
    }
  });
  
  router.post('/login', (req, res) => {
    let { teamname, password } = req.body;
    
    SportsModel.findBy({ teamname })
      .first()
      .then(team => {
          console.log('user', team)
        if (team && bcrypt.compareSync(password, team.password)) {
          //produce token
          const token = generateToken(team)
          console.log(`token`, token)
          //send token to client
          res.status(200).json({
            message: `Welcome ${team.teamname}!`,
            token //send token to client
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  function generateToken(team){
      let teamname = team.teamname
      console.log(`teamname`, teamname)
      
    const payload = {
        subject: team.id, //sub property in header
        teamname
        //additional data, do not include sensitve info
    }
   
    const secret = process.env.JWT_SECRET || "aslskek34l4kfnad"
    const options = {
        expiresIn : '8h'
    }
    console.log(`payload`, payload, secret, options)
    return jwt.sign(payload, secret, options)
  }
  
  module.exports = router;


module.export = router