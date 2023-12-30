const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const db = require('./models');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db.sequelize.sync({ alter: true });

require('./controller/user.controller')(app);
require('./controller/address.controller')(app);
require('./controller/products.controller')(app);
require('./controller/favorite.controller')(app);

app.listen(port, () => {
    console.log('Listen on port ', port);
});
