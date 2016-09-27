var express = require('express');
var morgan = require('morgan');
var path = require('path');

var aman1 ={
    title: 'yoaman',
    heading: 'mr j',
    date: '27 sept 2016',
    content: `<p>
                is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true
            </p>
            <p>
                is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true
            </p>
            <p>
                is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true
            </p>`
};
function createinject(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlinject=
    `<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div>
        <a href="/aman2">yoamanyo</a>
        </div>
    <div>    <a href="/ui/style.css" rel="stylesheet">oamanyo</a></div>
        <hr/>
        <h3> 
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
            </div>
        <a href="/">Home</a>
    </body>        
        </html>`;
        return htmlinject;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/aman1', function (req, res) {
  res.send(createinject(aman1));
});

app.get('/aman2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aman2.html'));
});

app.get('/amannair', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'amannair.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
