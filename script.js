const express = require('express');


const app = express();

app.use(express.static(__dirname + '/public'));
console.log(process.cwd())
app.set('views', 'views')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/download', (req, res) => {
    res.render('download')
})

app.get('/download/downloadAssigment3', async(req, res) => {
    try {
        const file = __dirname + '/download/Assigment3Dorada.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/downloadJA1', (req, res) => {
    try {
        const file = __dirname + '/download/JavaApplication1.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/downloadJA3', (req, res) => {
    try {
        const file = __dirname + '/download/JavaApplication3.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/downloadJavaGUI', (req, res) => {
    try {
        const file = __dirname + '/download/JavaGUIFinal.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/donwloadLastAssigmentCoreJava', (req, res) => {
    try {
        const file = __dirname + '/download/LastAssigmentCoreJavaDorada.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/donwloadSale', (req, res) => {
    try {
        const file = __dirname + '/download/saleUpdated.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/donwloadServerApp', (req, res) => {
    try {
        const file = __dirname + '/download/ServerAppDorada.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/donwloadDatabaseJava', (req, res) => {
    try {
        const file = __dirname + '/download/DatabaseJava.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})

app.get('/download/donwloadHibernate', (req, res) => {
    try {
        const file = __dirname + '/download/Hibernate.zip';
        res.download(file);
    } catch (e) {
        console.log(e);
    }
})





app.listen(3000, () => {
    console.log('listening on 3k')
})

