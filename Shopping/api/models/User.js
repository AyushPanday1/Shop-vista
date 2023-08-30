const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Name:{ type: String, required: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    phone:{ type: String, required: true, unique:true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
