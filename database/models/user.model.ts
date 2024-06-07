import mongoose from 'mongoose'

// Create a mongoose question model having title, explanation and tags
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

export default User
