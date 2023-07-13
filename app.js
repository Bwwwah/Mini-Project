const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/rangements', (req, res) => {
	/*Trouver les rangements*/
	res.render('rangements');
});

app.post('/enregistrer', (req, res) => {
	/*Traiter formulaire*/
	res.render('rangements');
});

/*app.get('/rangement/:id', (req, res) => {
	res.render('home', {
		id: req.param.id
	});
});*/

const port = 3000;
app.listen(port, () => {
	console.log(`Serveur démarré sur le port ${port}`);
});