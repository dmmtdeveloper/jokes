import mongoose from "mongoose";
const JokeSchema = new mongoose.Schema({
  setup: String,
  punchLine: String,
});

const Joke = mongoose.model("jokes", JokeSchema);
export default Joke;
