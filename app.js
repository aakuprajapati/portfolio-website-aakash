const express = require('express');
const app = express();
const exhbs = require('express-handlebars');


app.use(express.static(__dirname + "/public"));
app.use(require('./route'))

app.set("view engine","handlebars");
app.engine('handlebars',exhbs({

    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layout',
    partialsDir: __dirname + '/views/partials'
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log(`listening ${PORT}`);

