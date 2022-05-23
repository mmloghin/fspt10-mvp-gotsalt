const express = require ('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());

const savedFoodsRoute = require('./routes/SavedFoods')
app.use('/savedfoods', savedFoodsRoute);

const notesRoute = require('./routes/Notes')
app.use('/notes', notesRoute);

const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Server running on port 3002")
  });
})