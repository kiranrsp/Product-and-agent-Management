const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const CustomerSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      //enum: ['Electronics', 'Fashion', 'Beauty', 'Kids'],
      required: true,
    },
    salesPeople: [{
      type: Schema.Types.ObjectId,
      ref: 'Agent',
      default:["Professor X"]
    }],

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerSchema);
