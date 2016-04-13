'use strict';

import mongoose from 'mongoose';

var MessageSchema = new mongoose.Schema({
  name: String,
  info: String,
  imagePath: String,
  userName: String,
  text: String,
  subject: String,
  active: Boolean
});

export default mongoose.model('Message', MessageSchema);
