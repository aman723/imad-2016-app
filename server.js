var express = require('express');
var morgan = require('morgan');
var path = require('path');

var file= { 
   'aman1': {
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
},
  'aman2': {
      title: 'yoamanyo',
    heading: 'mr joker',
    date: '28 sept 2016',
    content: `<p>
                is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true
            </p>
            <p>
                is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true is it true
            </p>
            `},
  'amannair':{
      title: 'amannair',
    heading: 'mr j',
    date: '29 sept 2016',
    content: `<p>
    hi dis is aman hi dis is aman hi dis is aman  hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman
    </p>
    <p>
    hi dis is aman hi dis is aman hi dis is aman  hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman
    </p><p>
    hi dis is aman hi dis is aman hi dis is aman  hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman hi dis is aman
    </p>`
         }
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
 <div class="container">
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
        </div>
    </body>        
        </html>`;
        return htmlinject;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:amanname', function (req, res) {
    var amanname = res.params.amanname;
  res.send(createinject(file[amanname]));
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
