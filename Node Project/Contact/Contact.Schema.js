const { Schema, model } = require("mongoose");

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    minLength: 9,
    maxLength: 11,
  },
});

const myContact = model("contact", ContactSchema);

module.exports = myContact;
