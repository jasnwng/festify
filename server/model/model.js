const mongoose = require('./index');

const festivalSchema = new mongoose.Schema({
  name: String,
  festivalId: String,
  image: String,
  startDate: String,
  endDate: String,
  performer: [{
    performerType: String,
    name: String,
    performerId: String,
    image: String,
    bandOrMusician: String,
    genre: [String],
    performanceDate: String,
    performanceRank: Number,
    isHeadliner: Boolean,
  }]
});

const Festival = mongoose.model('Festival', festivalSchema);

async function getOneFestival(name) {
  return await Festival.find({ 'name': { "$regex": name, "$options": "i" } });
}

async function getAllFestivals() {
  return await Festival.find({}).select('name');
}

async function addFestival(festival) {
  const newFestival = await Festival.create(festival);
  return newFestival;
}


module.exports = {
  getOneFestival,
  getAllFestivals,
  addFestival,
}