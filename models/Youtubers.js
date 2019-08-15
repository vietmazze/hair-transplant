const mongoose = require("mongoose");

const TuberSchema = mongoose.Schema({
  channelID: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  viewCount: {
    type: Number
  },
  subscriberCount: {
    type: Number
  },
  videoCount: {
    type: Number
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("youtuber", TuberSchema);
