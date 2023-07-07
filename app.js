const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'Las carreras no se ganan en la primera curva. Muchas veces se pierden',
        'author': 'Juan Manuel Fangio',
    },
    {
        'text': 'Soy estricto con mis hijos. No quiero que se encariñen conmigo ya que algún día puede que no vuelva a casa',
        'author': 'Alberto Ascari',
    },
    {
        'text': 'Cuando tenga 50 años miraré los trofeos que he conseguido, pero hoy no me sirven de nada. Quiero volver a ganar',
        'author': 'Fernando Alonso',
    },
    {
        'text': 'Si no tienes las pelotas de frenar tarde, es tu problema',
        'author': 'Lewis Hamilton',
    }
];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.json(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}