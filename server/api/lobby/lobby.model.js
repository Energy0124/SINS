'use strict';

import mongoose from 'mongoose';

var LobbySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Lobby', LobbySchema);
