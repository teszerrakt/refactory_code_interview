const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  _id: ObjectId,
  email: String,
  given_name: String,
  family_name: String,
  picture: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
