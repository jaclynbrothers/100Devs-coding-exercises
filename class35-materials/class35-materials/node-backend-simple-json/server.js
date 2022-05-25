const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    res.end();
  });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch(page) {
    case '/' : readWrite('index.html', 'text/html')
    break;
    case '/otherpage' : readWrite('otherpage.html', 'text/html')
    break;
    case '/otherotherpage' : readWrite('otherotherpage.html', 'text/html')
    break;
    case '/api' :   
    // let personName = 'unknown'
      // let personOccupation = 'unknown'
      // let personStatus = 'unknown'
      // if(params['student']== 'leon'){
      //   // personName = 'leon'
      //   // personOccupation = 'Boss Man'
      //   // personStatus = 'Baller'
      // }
  
  //for coin flip:
    let flipResult = "type 'flip' in the input box"
    if (params['student'] == 'flip'){
      flipResult = Math.random() <= 0.5 ? 'heads' : 'tails'
    }
  // end coin flip section 1

      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        // name: personName,
        // status: personStatus,
        // currentOccupation: personOccupation

  // for coin flip:
        name: flipResult
  // end coin flip section 2
        }
        res.end(JSON.stringify(objToJson));
    break;
    case '/css/style.css' : 
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    break;
    case '/js/main.js' : 
    readWrite('js/main.js', 'text/javascript')
    break;
    default:
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
    break;
  }
});

server.listen(8000);
