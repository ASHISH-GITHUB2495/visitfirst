const express = require('express');
const path = require('path');
const fetch = require('node-fetch');


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const news = {
  "status": "ok",
  "totalResults": 10,
  "articles": [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lucas Matney",
      "title": "Apple One services subscription bundles start launching tomorrow",
      "description": "Apple is launching its Apple One services bundle tomorrow, though the company’s workout service Fitness+ isn’t quite ready yet. On an earnings call, CEO Tim Cook revealed tomorrow’s rollout and called the service the “easiest way for users to enjoy Apple serv…",
      "url": "https://techcrunch.com/2020/10/29/apple-one-services-subscription-bundles-start-launching-tomorrow/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/apple-one-2.jpg?w=711",
      "publishedAt": "2020-10-29T21:28:34Z",
      "content": "Apple is launching its Apple One services bundle tomorrow, though the company’s workout service Fitness+ isn’t quite ready yet.\r\nOn an earnings call, CEO Tim Cook revealed tomorrow’s rollout and call… [+1074 chars]"
    }
  ]
};



app.get('/api2',(req,res)=>{
async function fetchData() {
        const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3dc31574c05348d498ecf68edcf05115");
        response
          .json()
          .then((response) => {
           res.send(response);
        });
      }
      fetchData();
});

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
 res.send("<h1>hii</h1>");
  
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`r listening on ${port}`);