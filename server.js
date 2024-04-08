import ex from 'express';
import dir from 'path';

const app = ex();
const __dirname = dir.resolve();

app.use(ex.static(__dirname + '/mile/build'));

app.listen(3000, function () {
    console.log('Server is running on port 3000');
    console.log(__dirname)
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/mile/build/index.html')
});

app.get('/usuarios', function (req, res) {
    res.sendFile(__dirname + '/mile/build/index.html')
});

app.get('/actividades', function (req, res) {
    res.sendFile(__dirname + '/mile/build/index.html')
});