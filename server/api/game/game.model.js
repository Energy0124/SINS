'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GameSchema = new mongoose.Schema({
  name: String,
  developer: String,
  createdDate: { type: Date, default: Date.now },
  playCount:Number,
  rateCount: Number,
  rating:Number,
  genres:[String],
  tags: String,
  description: String,
  path: String,
  inPath: String,
  imagePath: String,
  active: Boolean
});

export default mongoose.model('Game', GameSchema);
