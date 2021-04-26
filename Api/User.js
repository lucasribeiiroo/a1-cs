const express = require('express');
const mongoose = require('mongoose');
const User = require('../database/User');
const route = express.Router();

route.post('/', async (req, res) => {
  const { email, password } = req.body;
  let user = {};
  user.email = email;
  user.password = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});


// Todos usuários

route.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users);
});

// Mudar depois quando houver autenticação para o id
route.get('/:email', async (req, res) => {
  const user = await User.find({ id: req.params.email})
  res.json(user);
});


// Mudar depois quando houver autenticação para o id
route.patch('/:email', async (req, res) => {
  const { password } = req.body;
  const user = await User.findOneAndUpdate({ email: req.params.email }, { password });

  res.json(user);
});

module.exports = route;
