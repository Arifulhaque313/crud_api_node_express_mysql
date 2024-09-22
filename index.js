const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    })
    .catch(err => console.log('Unable to connect to the database', err));


app.use('/posts', apiRoutes);