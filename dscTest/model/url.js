const mongoose = require('mongoose');

const { Schema } = mongoose;

const url = new Schema(
  {
    shortUrl: {
      type: String,
      unique: true,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('url', url);
