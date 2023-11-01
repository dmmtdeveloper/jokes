import Joke from "../models/jokesModel.js";

const createJokes = async (req, res) => {
  const jokeData = req.body;
  const newJoke = await Joke.create(jokeData);
  res.status(200).json(newJoke);
};


const readJokes = async (req, res) => {
  const jokeList = await Joke.find();
  res.status(200).json(jokeList);
};


const getOneJoke = async (req, res) => {
  const id = req.params.idJoke;
  const jokeFound = await Joke.findById(id);
  res.status(200).json(jokeFound);
};


const updateJokes = async (req, res) => {
  const id = req.params.idJoke;
  const Data = req.body;

  await Joke.findByIdAndUpdate(id, Data);
  res.status(200).json();
};


const deleteJokes = async (req, res) => {
  const id = req.params.idJoke;
  await Joke.findByIdAndDelete(id);
  res.status(200).json();
};

export { createJokes, getOneJoke, updateJokes, readJokes, deleteJokes };
