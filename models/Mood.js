import mongoose from "mongoose"

const MoodSchema = new mongoose.Schema({
    type: {
      type: String,
      required: [true, "Please provide mood"],
      maxlength: 20,
    },
    date: { type: Date, default: Date.now },
    weather: {
        type: String,
        maxlength: 20,
    },
        
},{timestamps:true})

export default mongoose.model('Mood', MoodSchema)
