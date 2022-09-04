const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  // totalHours: Number,
  userId: {
    type: String,
    required: true
  },
  memberShare: {
    type: Boolean,
    required: true
  },
  publicShare: {
    type: Boolean,
    required: true
  },
},
{ timestamps: true } //added timestamp
)

module.exports = mongoose.model('Todo', TodoSchema)
