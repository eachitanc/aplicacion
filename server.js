import ex from 'express';
import dir from 'path';

const app = ex();
const __dirname = dir.resolve();

app.use(ex.static('build'));

app.listen(5000, function () {
    console.log('Server is running on port 5000');
    console.log(__dirname);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.get('/usuarios', function (req, res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.get('/actividades', function (req, res) {
    res.sendFile(__dirname + '/build/index.html')
});