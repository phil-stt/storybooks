const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const StorySchema = new Schema({
  title:{
    type:String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  status: {
    type: String,
    default:'public'
  },
  allowComments: {
    type: Boolean,
    default:true
  },
  // Comments are an array of values, hence the bracket
  comments: [{
    commentBody: {
      type: String,
      required: true
    },
    commentDate:{
      type: Date,
      default: Date.now
    },
    //Setting ref to users and relating to users
    commentUser:{
      type: Schema.Types.ObjectId,
      ref:'users'
    }
  }],
  user:{
    type: Schema.Types.ObjectId,
    ref:'users'
  },
  date:{
    type: Date,
    default: Date.now
  }
});

// Create collection and add schema
// Third parameter forces 'stories' instead of 'storys' for coll name
mongoose.model('stories', StorySchema, 'stories');