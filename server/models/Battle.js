import mongoose from 'mongoose';

const battleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  opponent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  audioUrl: {
    type: String,
    required: true,
  },
  votes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    votedFor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    text: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  status: {
    type: String,
    enum: ['pending', 'active', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Battle', battleSchema);