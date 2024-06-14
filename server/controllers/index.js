const model = require('../model/model');

const getOneFestival = async (req, res) => {
  try {
    const name = req.body.festivalName;
    const festival = await model.getOneFestival(name);
    if (festival.length === 0) res.send(404)
    else res.status(200).json(festival);
  } catch (error) {
    console.log('e', error);
    res.send(500);
  }
};

const getAllFestivals = async (req, res) => {
  try {
    const festivals = await model.getAllFestivals();
    res.status(200).json(festivals);
  } catch (error) {
    console.log('e', error);
    res.send(500);
  }
};

module.exports = {
  getOneFestival,
  getAllFestivals,
};