const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
  agentName: {
    type: String,
    required: true,
    unique: true
  },

}, {
  timestamps: true
});

module.exports = mongoose.model("Agent", AgentSchema);