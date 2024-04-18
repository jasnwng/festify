const model = require('../model/model');

const getOneFestival = async (req, res) => {
  try {
    console.log('get one')
    const name = req.body.name;
    console.log('NAME', name)
    const festival = await model.getOneFestival(name);
    res.status(200);
    res.send(festival);
  } catch (error) {
    console.log('e', error);
    res.status(500);
  }
};

const getAllFestivals = async (req, res) => {
  try {
    console.log('get all')
    const festival = await model.getAllFestivals();
    res.status(200);
    res.send(festival);
  } catch (error) {
    console.log('e', error);
    res.status(500);
  }
};

module.exports = {
  getOneFestival,
  getAllFestivals,
};