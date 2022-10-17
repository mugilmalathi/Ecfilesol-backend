const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
      validate: [validators.notEmpty, "Name is empty"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },
    password: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(v);
        },
        message: "Please enter a valid password",
        required: [true, "Password required"],
    },
},
    mobile: {
      type: String,
      trim: true,
      validate: [
            {
            validator: function (v) {
            return /^[0-9]{10}/.test(v);
            },
            message: "{VALUE} is not a valid 10 digit number!",
            },
            {
            validator: function (v) {
            return /^{6}[0-9]{10}/.test(v);
            },
            message: "{VALUE} is not a valid 10 digit number!",
            }
      ]
    },
  
},
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("accAuth", userSchema);
