const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
// NOTE: by running       $npm run seed           from the root level you can seed some data to your local database.

const homePageSchema = new Schema({
  // IDs are created by mongoose and should not be made manually
  title: { type: String, required: true }, // This will be the <h1> tag
  subtitle: { type: String }, // this is like a by line.
  chapterOne: { type: String }, // this will go inside the <React.Fragment> on Home.jsx
  date: { type: Date, default: Date.now }, // Why not
});

const HomePageInfo = mongoose.model("Book", homePageSchema);

module.exports = HomePageInfo;
