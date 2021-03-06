'use strict'
var mongoose = require('mongoose');

let schema = new mongoose.Schema({
  type: {
    type: String,
    unique: true
  },
  requests: {},
  blueprint: Boolean,
  created: Date
})

module.exports = mongoose.model('Document-Type', schema);
