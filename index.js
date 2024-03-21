let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes user
const insertRoutes = require('./User/insert');
const editRoutes = require('./User/edit');
const deleteRoutes = require('./User/delete');
const selectRoutes = require('./User/select');
const select_viewRoutes = require('./User/select_view');

// // Routes admin
// const insert_adminRoutes = require('./Admin/insert_admin');
// const edit_adminRoutes = require('./Admin/edit_admin');
// const delete_adminRoutes = require('./Admin/delete_admin');


app.use('/', insertRoutes);
app.use('/', editRoutes);
app.use('/', deleteRoutes);
app.use('/', selectRoutes);
app.use('/', select_viewRoutes);

// app.use('/', insert_adminRoutes);
// app.use('/', edit_adminRoutes);
// app.use('/', delete_adminRoutes);

app.listen(3007, () => {
    console.log('Node app is running on port 3007');
});

module.exports = app;
