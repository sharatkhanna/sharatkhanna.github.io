var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One | Sharat Khanna',
        heading: 'Article One',
        date: '17 Feb, 2018',
        content: `
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>`
    },
    'article-two' : {
        title: 'Article Two | Sharat Khanna',
        heading: 'Article Two',
        date: '18 Feb, 2018',
        content: `
            <p>
                This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
            </p>
            <p>
                This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
            </p>
            <p>
                This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
            </p>`
    },
    
    'article-three' :  {
        
        title: 'Article Three | Sharat Khanna',
        heading: 'Article Three',
        date: '19 Feb, 2018',
        content: `
            <p>
                This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
            </p>
            <p>
                This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
            </p>
            <p>
                This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
            </p>`
        
    },
    };
        
            
function createTemplate(data) {
    var title = data.title;
    var date =  data.date;
    var heading = data.heading;
    var content =  data.content;


var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
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
                </div>
            </body>
        </html>`;
        return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/:articleName', function (req, res) {
    
//    res.send(createTemplate(articles[articleName]));
    
//});

var counter = 0;
app.get('/counter', function (req, res) {
    counter += 1;
    res.send(counter.toString());
});


app.get('/guessingGame', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'guessingGame.html'));
});

app.get('/new', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'new.html'));
});

app.get('/article-two', function (req, res) {
    res.send('Article two requested and will be served');
});

app.get('/article-three', function (req, res) {
    res.send('Article three requested and will be served');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
